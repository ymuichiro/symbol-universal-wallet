export interface Account {
    address: string;
    publicKey: string;
    mosaics: Mosaic[];
};

export interface Mosaic {
    id: string;
    amount: BigInt;
};