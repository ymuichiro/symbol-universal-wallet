import { getDataFromApi, buildQueryString } from '../utils/utils';
import TransferTransaction from '../models/TransferTransaction';
import MosaicTransaction from '../models/MosaicTransaction';

const BACKEND = "http://localhost:3000";
// const BACKEND = "http://192.168.10.4:3000";

export default class TransactionBuilderService {
    static async buildTransferTransaction(transferTransaction: TransferTransaction): Promise<string> {
        try{
            const queryString = buildQueryString(transferTransaction);
            const url = new URL(`${BACKEND}/api/transactions/transfer?${queryString}`);
            console.log(url.toString());
            const result = await getDataFromApi(url.toString());
            return result.payload;
        } catch(e: any) {
            throw new Error(e.message);
        }
    }

    static async buildMosaicTransaction(mosaicTransaction: MosaicTransaction): Promise<string> {
      try{
          const queryString = buildQueryString(mosaicTransaction);
          const url = new URL(`${BACKEND}/api/transactions/mosaic?${queryString}`);
          const result = await getDataFromApi(url.toString());
          return result.payload;
      } catch(e: any) {
          throw new Error(e.message);
      }
  }
}
