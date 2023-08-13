import type { NextApiRequest, NextApiResponse } from 'next/types';
import { TransactionService } from 'symbol'
import symbolSdk from 'symbol-sdk';

export default async function create(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === 'GET') {
            return await getHandle(req, res);
    }
        return res.status(405).end();
    } catch (err) {
        console.error(err);
        return res.status(500).end();
    }
}
async function getHandle(req: NextApiRequest, res: NextApiResponse) {
    let { hash, node } = req.query;
    if(hash == undefined || Array.isArray(hash)) throw new Error('hash is undefined or string[]');
    if(node == undefined || Array.isArray(node)) throw new Error('node is undefined or string[]');
    const tx = await TransactionService.getConfirmedTransaction(node, hash)
    if(tx.transaction.type != 16724) throw new Error('transaction type is not transger transaction');
    const result = await sendWinnerMosaic(tx, node);
    res.status(200).json({ message: result});
}

async function sendWinnerMosaic(tx: any, node: string): Promise<any>{
    if(!tx.transaction.mosaics.some((m: any) => m.id === '72C0212E67A08BCE' && Number(m.amount) >= 1))
        return ({ error: `you have not paid yet: 72C0212E67A08BCE` });
    const { network, signerPublicKey } = tx.transaction;
    const { hash } = tx.meta;
    const facade = network == 152 ? new symbolSdk.facade.SymbolFacade('testnet') : new symbolSdk.facade.SymbolFacade('mainnet');
    const address = facade.network.publicKeyToAddress(new symbolSdk.PublicKey(symbolSdk.utils.hexToUint8(signerPublicKey))).toString();

    const keyPair = new symbolSdk.symbol.KeyPair(new symbolSdk.PrivateKey(process.env.SYSTEM_PRIVATE_KEY));
    const publicKey = symbolSdk.utils.uint8ToHex(keyPair.publicKey.bytes);
    let txs: any = [];
    let count = 1;

    // 承認済みトランザクションを抽出
    while(true){
        const t = await TransactionService.searchConfirmedTransactions(node, {
            type: [16724],
            recipientAddress: address,
            signerPublicKey: publicKey,
            pageSize: 100,
            pageNumber: count,
        })
        if(t.data.length == 0) {
            break
        } else {
            count++;
            txs = txs.concat(t.data)
        };
    }
    // 未承認トランザクションを抽出
    while(true){
        const t = await TransactionService.searchUnconfirmedTransactions(node, {
            type: [16724],
            recipientAddress: address,
            signerPublicKey: publicKey,
            pageSize: 100,
        })
        if(t.data.length == 0) {
            break
        } else {
            count++;
            txs = txs.concat(t.data)
        };
    }
    
    // トランザクション内でHashを使用していないか確認
    for (const tx of txs) {
        if(tx.transaction.message != undefined && hexToUtf8(tx.transaction.message) == hash){
            return ({ error: `you have already got xym mon with this hash: ${hexToUtf8(tx.transaction.message)}` });
        }
    }

    // 返信トランザクション
    const transaction = facade.transactionFactory.create({
        signerPublicKey: publicKey,
        type: 'transfer_transaction_v1',
        deadline: new symbolSdk.symbol.NetworkTimestamp(facade.network.fromDatetime(Date.now())).addHours(2).timestamp,
        recipientAddress: address,
        message: hash,
        mosaics: [{
            mosaicId: BigInt("0x0EE5AA6102C675A5"),
            amount: BigInt(1)
        }]
    });

    transaction.fee = new symbolSdk.symbol.Amount(BigInt(transaction.size * 100));
    const signature = facade.signTransaction(keyPair, transaction);
    transaction.signature = new symbolSdk.symbol.Signature(signature.bytes);
    const transactionBuffer = transaction.serialize();
	const hexPayload = symbolSdk.utils.uint8ToHex(transactionBuffer);
    const result = await TransactionService.announceTransaction(node, hexPayload)
    return result;
}

function hexToUtf8(hex: string) {
    const bytes = [];
    for (let i = 0; i < hex.length; i += 2) {
        bytes.push(parseInt(hex.substr(i, 2), 16));
    }
    const utf8String = new TextDecoder().decode(new Uint8Array(bytes));
    return utf8String;
}