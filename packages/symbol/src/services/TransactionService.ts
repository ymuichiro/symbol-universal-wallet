import { TransactionRoutesApi, Configuration, AnnouncePartialTransactionRequest, SearchConfirmedTransactionsRequest, AnnounceCosignatureTransactionRequest, AnnounceTransactionRequest } from 'symbol-rest/dist/';

export default class TransactionService {
  constructor() {}

  static async getConfirmedTransaction(node: string, transactionId: string) {
    try {
      const transactionRoutesApi = new TransactionRoutesApi(
        new Configuration({
          basePath: node,
      }));
      return await transactionRoutesApi.getConfirmedTransaction({ transactionId: transactionId })
    } catch (e) {
      if (e instanceof Error) {
        throw e;
      } else {
        throw new Error(`${ this.name } ${this.getConfirmedTransaction.name} error}`);
      }
    }
  }

  static async getUnconfirmedTransaction(node: string, transactionId: string) {
    try {
      const transactionRoutesApi = new TransactionRoutesApi(
        new Configuration({
          basePath: node,
      }));
      const transaction = await transactionRoutesApi.getUnconfirmedTransactionRaw({ transactionId: transactionId })
      return await transaction.raw.json()
    } catch (e) {
      if (e instanceof Error) {
        throw e;
      } else {
        throw new Error(`${ this.name } ${this.getUnconfirmedTransaction.name} error}`);
      }
    }
  }

  static async getPartialTransaction(node: string, transactionId: string) {
    try {
      const transactionRoutesApi = new TransactionRoutesApi(
        new Configuration({
          basePath: node,
      }));
      const transaction = await transactionRoutesApi.getPartialTransactionRaw({ transactionId: transactionId })
      return await transaction.raw.json()
    } catch (e) {
      if (e instanceof Error) {
        throw e;
      } else {
        throw new Error(`${ this.name } ${this.getPartialTransaction.name} error}`);
      }
    }
  }

  static async searchConfirmedTransactions(node: string, searchConfirmedTransactionsRequest: SearchConfirmedTransactionsRequest = {}) {
    try {
      const transactionRoutesApi = new TransactionRoutesApi(
        new Configuration({
          basePath: node,
      }));
      const transactions = await transactionRoutesApi.searchConfirmedTransactionsRaw(searchConfirmedTransactionsRequest)
      return await transactions.raw.json()
    } catch (e) {
      if (e instanceof Error) {
        throw e;
      } else {
        throw new Error(`${ this.name } ${this.searchConfirmedTransactions.name} error}`);
      }
    }
  }

  static async searchUnconfirmedTransactions(node: string, searchConfirmedTransactionsRequest: SearchConfirmedTransactionsRequest = {}) {
    try {
      const transactionRoutesApi = new TransactionRoutesApi(
        new Configuration({
          basePath: node,
      }));
      const transactions = await transactionRoutesApi.searchUnconfirmedTransactionsRaw(searchConfirmedTransactionsRequest)
      return await transactions.raw.json()
    } catch (e) {
      if (e instanceof Error) {
        throw e;
      } else {
        throw new Error(`${ this.name } ${this.searchUnconfirmedTransactions.name} error}`);
      }
    }
  }

  static async searchPartialTransactions(node: string, searchConfirmedTransactionsRequest: SearchConfirmedTransactionsRequest = {}) {
    try {
      const transactionRoutesApi = new TransactionRoutesApi(
        new Configuration({
          basePath: node,
      }));
      const transactions = await transactionRoutesApi.searchPartialTransactionsRaw(searchConfirmedTransactionsRequest)
      return await transactions.raw.json()
    } catch (e) {
      if (e instanceof Error) {
        throw e;
      } else {
        throw new Error(`${ this.name } ${this.searchPartialTransactions.name} error}`);
      }
    }
  }

  static async announceCosignatureTransaction(node: string, requestParameters: AnnounceCosignatureTransactionRequest) {
    try {
      const transactionRoutesApi = new TransactionRoutesApi(
        new Configuration({
          basePath: node,
      }));
      return await transactionRoutesApi.announceCosignatureTransaction(requestParameters)
    } catch (e) {
      if (e instanceof Error) {
        throw e;
      } else {
        throw new Error(`${ this.name } ${this.announceCosignatureTransaction.name} error}`);
      }
    }
  }

  static async announcePartialTransaction(node: string, requestParameters: AnnouncePartialTransactionRequest) {
    try {
      const transactionRoutesApi = new TransactionRoutesApi(
        new Configuration({
          basePath: node,
      }));
      return await transactionRoutesApi.announcePartialTransaction(requestParameters)
    } catch (e) {
      if (e instanceof Error) {
        throw e;
      } else {
        throw new Error(`${ this.name } ${this.announcePartialTransaction.name} error}`);
      }
    }
  }

  static async announceTransaction(node: string, payload: string) {
    try {
      const transactionRoutesApi = new TransactionRoutesApi(
        new Configuration({
          basePath: node,
      }));
      const requestParameters: AnnounceTransactionRequest = {
        transactionPayload: {
          payload: payload
        }
      }
      return await transactionRoutesApi.announceTransaction(requestParameters)
    } catch (e) {
      if (e instanceof Error) {
        throw e;
      } else {
        throw new Error(`${ this.name } ${this.announceTransaction.name} error}`);
      }
    }
  }
}

