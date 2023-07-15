import { getDataFromApi } from '../restApiClient/shared';
import ITransferTransaction from 'symbol/src/models/transactions/ITransferTransaction';
import { buildQueryString } from 'symbol/src/services/utils';

export default async function transfer(transferTransaction: ITransferTransaction): Promise<string> {
    try{
        const queryString = buildQueryString(transferTransaction);
        const url = `http://localhost:3000/api/transactions/transfer?${queryString}`;
        const result = await getDataFromApi(url)
        return result.payload;
    } catch(e: any) {
        throw new Error(e.message);
    }
}