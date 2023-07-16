export default class TransactionMeta {
    height: number;
    hash: string;
    merkleComponentHash: string;
    index: number;
    timestamp: BigInt;
    feeMultiplier: number;

    constructor(height: number, hash: string, merkleComponentHash: string, index: number, timestamp: BigInt, feeMultiplier: number){
        this.height = height;
        this.hash = hash;
        this.merkleComponentHash = merkleComponentHash;
        this.index = index;
        this.timestamp = timestamp;
        this.feeMultiplier = feeMultiplier;
    }
}