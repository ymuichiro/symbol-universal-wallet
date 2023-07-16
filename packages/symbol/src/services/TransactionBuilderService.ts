import { getDataFromApi } from './utils';
import ITransferTransaction from 'symbol/src/models/interfaces/ITransferTransaction';
import { buildQueryString } from 'symbol/src/services/utils';

const BACKEND = "http://localhost:3000";
// const BACKEND = "http://192.168.10.4:3000";

export default class TransactionBuilderService {
    static async buildTransferTransaction(transferTransaction: ITransferTransaction): Promise<string> {
        try{
            console.log(BACKEND);
            const queryString = buildQueryString(transferTransaction);
            const url = `${BACKEND}/api/transactions/transfer?${queryString}`;
            console.log(url);
            const result = await getDataFromApi(url)
            console.log(result);
            return result.payload;
        } catch(e: any) {
            throw new Error(e.message);
        }
    }
}
