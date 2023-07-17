import { NetworkType } from './NetworkType';
import { requestSign, setTransactionByPayload } from 'sss-module';
import { isMobileDevice } from '../utils/isMobileDevice';
import { utf8ToHex } from '../utils/converter';

const callbackUrl = 'http://192.168.10.4:3000/user/TAUYF774MZWLBEUI7S2LR6BA5CYLL53QSMDVV3Y';

export default class Transaction {
  constructor(
    public networkType?: NetworkType, 
    public deadline?: BigInt, 
    public feeMultiplier?: number,
    public payload: string = ''){}

    async build(){};

    public async sign(): Promise<string | undefined> {
      if(this.payload == '') await this.build();

      if(isMobileDevice()) {
        window.location.href = `alice://sign?type=request_sign_transaction&data=${this.payload}&callback=${utf8ToHex(callbackUrl)}`;
        return undefined;
      } else {
        setTransactionByPayload(this.payload);
        const signedTransaction = await requestSign();
        return signedTransaction.payload;
      }
    }
}