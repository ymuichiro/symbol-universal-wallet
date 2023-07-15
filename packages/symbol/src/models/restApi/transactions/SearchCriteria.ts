import { TransactionType } from '../../transactions/TransactionType';

export enum TransactionGroup {
    Confirmed = 'confirmed',
    Unconfirmed = 'unconfirmed',
    Partial = 'partial',
}

export enum Order {
    Asc = 'asc',
    Desc = 'desc',
}

export interface SearchCriteria {
    order?: Order;
    pageSize?: number;
    pageNumber?: number;
    offset?: string;
}

export interface TransactionSearchCriteria extends SearchCriteria {
    address?: string;
    recipientAddress?: string;
    signerPublicKey?: string;
    height?: number;
    fromHeight?: number;
    toHeight?: number;
    fromTransferAmount?: number;
    toTransferAmount?: number;
    type?: TransactionType;
    embedded?: Boolean;
    transferMosaicId?: string;
}