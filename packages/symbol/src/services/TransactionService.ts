import Transaction from 'symbol/src/models/Transaction';
import TransactionMeta from 'symbol/src/models/TransactionMeta';
import { TransactionType } from 'symbol/src/models/TransactionType';
import TransferTransaction from 'symbol/src/models/TransferTransaction';
import Pagination from '../models/Pagination';
import { TransactionGroup, TransactionSearchCriteria } from '../models/SearchCriteria';
import TransactionSearchResult from '../models/TransactionSearchResult';
import {
  buildQueryString,
  convertToMosaicArray,
  getDataFromApi,
  getNetworkType,
  getTransactionType,
  hexToAddress,
} from './utils';

export default class TransactionService {
  node: string;
  constructor(node: string) {
    this.node = node;
  }
  public async searchTransactions(
    group: TransactionGroup,
    transactionSearchCriteria: TransactionSearchCriteria
  ): Promise<TransactionSearchResult> {
    const queryString = buildQueryString(transactionSearchCriteria);
    const url = `${this.node}/transactions/${group}?${queryString}`;
    const data = await getDataFromApi(url);

    console.log(data);

    const transactions: Transaction[] = [];
    data.data.forEach((d: any) => {
      const transaction = TransactionService.tryParseTransaction(d);
      if (transaction != undefined) transactions.push(transaction);
    });
    const pagination: Pagination = {
      pageNumber: data.pagination.pageNumber,
      pageSize: data.pagination.pageSize,
    };
    return { transactions, pagination };
  }

  public async getTransactionInfo(group: TransactionGroup, transactionID: string) {
    try {
      const url = `${this.node}/transactions/${group}/${transactionID}`;
      const data = await getDataFromApi(url);
      return TransactionService.tryParseTransaction(data);
    } catch (e) {
      if (e instanceof Error) {
        throw e;
      } else {
        throw new Error();
      }
    }
  }

  public async announce(payload: string): Promise<string> {
    const data = {
      payload: payload,
    };
    const result = await fetch(this.node + '/transactions', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return result.json();
  }

  static tryParseTransaction(data: any): Transaction | undefined {
    const { type } = data.transaction;
    switch (getTransactionType(type)) {
      case TransactionType.TransferTransaction:
        return this.tryParseTransferTransaction(data);
      default:
        console.error('Transaction type not implemented:' + type);
        return undefined;
    }
  }

  static tryParseMeta(meta: any): TransactionMeta {
    const { height, hash, merkleComponentHash, index, timestamp, feeMultiplier } = meta;
    return new TransactionMeta(Number(height), hash, merkleComponentHash, index, BigInt(timestamp), feeMultiplier);
  }

  static tryParseTransferTransaction(data: any): TransferTransaction {
    const { meta } = data;
    const { size, signature, signerPublicKey, version, network, type, maxFee, deadline, recipientAddress, mosaics } =
      data.transaction;
    const transactionMeta = this.tryParseMeta(meta);
    return new TransferTransaction(
      transactionMeta,
      size,
      signature,
      signerPublicKey,
      version,
      getNetworkType(network),
      getTransactionType(type),
      BigInt(maxFee),
      BigInt(deadline),
      hexToAddress(recipientAddress),
      convertToMosaicArray(mosaics)
    );
  }
}
