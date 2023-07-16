import AccountService from './AccountService';
import TransactionService from './TransactionService';

export default class SymbolRestApiService {
    node: string;
    constructor(url: string) {
        this.node = url;
    }

    createAccountService() {
        return new AccountService(this.node);
    }

    createTransactionService() {
        return new TransactionService(this.node);
    }
}