import { TransactionType } from './TransactionType';
import Mosaic from "./Mosaic";
import TransactionMeta from './TransactionMeta';
import Transaction from './Transaction';

export default class TransferTransaction extends Transaction {
    message: string;
    recipientAddress: string;
    mosaics: Mosaic[];
    constructor(meta: TransactionMeta, size: number, signature: string, signerPublicKey: string, version: number, network: number, type: TransactionType, maxFee: BigInt, deadline: BigInt, recipientAddress: string, mosaics: Mosaic[]){
        super(meta, size, signature, signerPublicKey, version, network, type, maxFee, deadline);
        this.message = '';
        this.recipientAddress = recipientAddress;
        this.mosaics = mosaics;
    }
}