import { TransactionType } from '../../transactions/TransactionType';
import { NetworkType } from "../../NetworkType";
import Mosaic from "../../../models/Mosaic";
import { getNetworkType, getTransactionType, convertToMosaicArray, hexToAddress } from '../../../services/utils'
import base32 from '../../../utils/base32'
import { hexToUint8 } from '../../../utils/converter'

export default class TransferTransaction {
    size: number;
    signature: string;
    signerPublicKey: string;
    version: number;
    network: NetworkType;
    type: TransactionType;
    maxFee: BigInt;
    deadline: BigInt;
    recipientAddress: string;
    mosaics: Mosaic[];
    constructor(size: number, signature: string, signerPublicKey: string, version: number, network: number, type: TransactionType, maxFee: string, deadline: string, recipientAddress: string, mosaics: object[]){
        this.size = size;
        this.signature = signature;
        this.signerPublicKey = signerPublicKey;
        this.version = version;
        this.network = getNetworkType(network);
        this.type = getTransactionType(type);
        this.maxFee = BigInt(maxFee);
        this.deadline = BigInt(deadline);
        this.recipientAddress = hexToAddress(recipientAddress);
        this.mosaics = convertToMosaicArray(mosaics);
    }
}