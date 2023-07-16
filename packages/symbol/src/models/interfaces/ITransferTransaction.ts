import Mosaic from '../Mosaic';
import { NetworkType } from '../NetworkType';

export default interface ITransferTransaction {
    networkType: NetworkType;
    deadline?: BigInt;
    feeMultiplier?: BigInt;
    mosaics: Mosaic[] | undefined;
    recipientAddress: string;
    message: string | undefined;
}