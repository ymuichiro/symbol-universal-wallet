import type { NextApiRequest, NextApiResponse } from 'next/types';
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
    try{
        let { recipientAddress, 'mosaics[id]': mosaicIds, 'mosaics[amount]': mosaicAmounts, feeMultiplier, message, networkType, deadline } = req.query;
        const _feeMultiplier = feeMultiplier == undefined ? 100 : Number(feeMultiplier);
        const facade = new symbolSdk.facade.SymbolFacade(networkType == "0" ? "mainnet" : "testnet");
        deadline = deadline == undefined ? new symbolSdk.symbol.NetworkTimestamp(facade.network.fromDatetime(Date.now())).addHours(2).timestamp
            : new symbolSdk.symbol.NetworkTimestamp(deadline).timestamp;
        let mosaics = [];
        if(Array.isArray(mosaicIds)) {
            for (let i = 0; i < mosaicIds.length; i++) {
                const mosaicId = mosaicIds[i];
                const amount = mosaicAmounts![i];
                mosaics.push({ 
                    mosaicId: BigInt("0x" + mosaicId), 
                    amount: BigInt(amount) }
                );
            }
        } else {
            mosaics.push({ 
                mosaicId: BigInt("0x" + mosaicIds), 
                amount: BigInt(Number(mosaicAmounts))}
            );
        }
        let messageArray: number[] = [];
        if(typeof message === 'string'){
            messageArray = [0,...(new TextEncoder()).encode(message)];
        }
        const transaction = facade.transactionFactory.create({
            type: 'transfer_transaction_v1',
            deadline,
            message: messageArray,
            recipientAddress,
            mosaics
        });
        transaction.fee = new symbolSdk.symbol.Amount(BigInt(transaction.size * _feeMultiplier));
        res.status(200).json({ payload: symbolSdk.utils.uint8ToHex(transaction.serialize())});
    } catch (err: any) {
        return res.status(400).json({ error: err.message });
    }
}
