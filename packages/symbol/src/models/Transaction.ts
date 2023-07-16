import { TransactionType } from './TransactionType';
import { NetworkType } from "./NetworkType";
import TransactionMeta from "./TransactionMeta";

export default class Transaction {
    meta: TransactionMeta;
    size: number;
    signature: string;
    signerPublicKey: string;
    version: number;
    network: NetworkType;
    type: TransactionType;
    maxFee: BigInt;
    deadline: BigInt;

    constructor(meta: TransactionMeta, size: number, signature: string, signerPublicKey: string, version: number, network: number, type: TransactionType, maxFee: BigInt, deadline: BigInt){
        this.meta = meta;
        this.size = size;
        this.signature = signature;
        this.signerPublicKey = signerPublicKey;
        this.version = version;
        this.network = network;
        this.type = type;
        this.maxFee = maxFee;
        this.deadline = deadline;
    }
}
