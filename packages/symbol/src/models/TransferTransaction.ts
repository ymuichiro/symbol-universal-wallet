import Mosaic from './Mosaic';
import { NetworkType } from './NetworkType';
import Transaction from './Transaction';
import TransactionBuilderService from '../services/TransactionBuilderService';

export default class TransferTransaction extends Transaction{
  constructor(
      public readonly networkType: NetworkType, 
      public readonly recipientAddress: string, 
      public readonly deadline?: BigInt, 
      public readonly feeMultiplier?: number, 
      public readonly mosaics?: Mosaic[], 
      public readonly message?: string,
      ){
      super(networkType, deadline, feeMultiplier)
  }

  public override async build(){
    this.payload = await TransactionBuilderService.buildTransferTransaction(this);
  }

  public override async sign(): Promise<string | undefined>{
    return await super.sign()
  }
}