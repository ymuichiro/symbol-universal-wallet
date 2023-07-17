import { getDataFromApi, buildQueryString } from '../utils/utils';
import TransferTransaction from '../models/TransferTransaction';

const BACKEND = "http://localhost:3000";
// const BACKEND = "http://192.168.10.4:3000";

export default class TransactionBuilderService {
    static async buildTransferTransaction(transferTransaction: TransferTransaction): Promise<string> {
        try{
            const queryString = buildQueryString(transferTransaction);
            const url = `${BACKEND}/api/transactions/transfer?${queryString}`;
            const result = await getDataFromApi(url)
            return result.payload;
        } catch(e: any) {
            throw new Error(e.message);
        }
    }
}
