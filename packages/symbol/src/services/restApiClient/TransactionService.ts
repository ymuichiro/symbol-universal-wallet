import { node, getDataFromApi, Mosaic, Account, hexToUint8, base32 } from '../restApiClient/shared';
import { buildQueryString } from '../utils';
import TransferTransaction from 'symbol/src/models/restApi/transactions/TransferTransaction';
import  { TransactionGroup, TransactionSearchCriteria } from '../../models/restApi/transactions/SearchCriteria';

export default class TransactionService {
    public async searchTransactions(group: TransactionGroup, transactionSearchCriteria: TransactionSearchCriteria){
        const queryString = buildQueryString(transactionSearchCriteria);
        const url = `${node}/transactions/${group}?${queryString}`;
        console.log(url);
        const result = await getDataFromApi(url);

        const transactions: TransferTransaction[] = [];
        result.data.forEach((transaction: any) => {
            const transfer = new TransferTransaction(
                transaction.transaction.size,
                transaction.transaction.signature,
                transaction.transaction.signerPublicKey,
                transaction.transaction.version,
                transaction.transaction.network,
                transaction.transaction.type,
                transaction.transaction.maxFee,
                transaction.transaction.deadline,
                transaction.transaction.recipientAddress,
                transaction.transaction.mosaics
            )
            transactions.push(transfer);
        });
        console.log(transactions);
    }

    public async getTransactionInfo(address: string) {
        try {
            const data = await getDataFromApi(node + '/accounts/' + address);
            let mosaics: Mosaic[] = [];
            data.account.mosaics.forEach(m => {
                mosaics.push({
                    id: m.id,
                    amount: BigInt(m.amount)
                })
            });
            const account: Account = {
                address: base32.encode(new Uint8Array([...hexToUint8(data.account.address), 0])).slice(0, -1),
                publicKey: data.account.publicKey,
                mosaics
            };
            return account;
        } catch(e) {
            throw new Error(e.message);
        }
    }

    public async announce(payload: string): Promise<string>{
        const data = {
            payload: payload
        }
        const result = await fetch(node + '/transactions', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        return result.json();
    }
}
