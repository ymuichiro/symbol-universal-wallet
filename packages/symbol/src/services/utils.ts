import { NetworkType } from '../models/NetworkType';
import { TransactionType } from '../models/transactions/TransactionType';
import Mosaic from '../models/Mosaic';
import base32 from '../utils/base32';
import { hexToUint8 } from '../utils/converter';

export async function getDataFromApi(url: string){
    const res = await fetch(url);
    return res.json()
}

export function buildQueryString(obj: any): string {
    const queryString = Object.keys(obj)
        .map((key) => {
        const value = obj[key];
        if (Array.isArray(value)) {
            return value
            .map((item: any) =>
                Object.keys(item)
                .map((itemKey) => `${encodeURIComponent(key)}[${encodeURIComponent(itemKey)}]=${encodeURIComponent(item[itemKey])}`)
                .join('&')
            )
            .join('&');
        } else {
            return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        }
    })
    .join('&');
    
    return queryString;
}

export function getNetworkType(number: number): NetworkType {
    const keys = Object.keys(NetworkType).filter((key) => isNaN(Number(key)));
    for (const key of keys) {
        if (NetworkType[key] === number) {
            return NetworkType[key];
        }
    }
    throw new Error('Invalid network type');
}

export function getTransactionType(number: number): TransactionType {
    const keys = Object.keys(TransactionType).filter((key) => isNaN(Number(key)));
    for (const key of keys) {
        if (TransactionType[key] === number) {
            return TransactionType[key];
        }
    }
    throw new Error('Invalid transaction type');
}

export function convertToMosaicArray(objArray: any[]): Mosaic[] {
    const mosaicArray: Mosaic[] = [];
    for (const obj of objArray) {
        const mosaic: Mosaic = {
            id: obj.id,
            amount: BigInt(obj.amount)
    };
        mosaicArray.push(mosaic);
    }
    return mosaicArray;
}

export function hexToAddress(recipientAddress: string): string{
    return base32.encode(new Uint8Array([...hexToUint8(recipientAddress), 0])).slice(0, -1);
}