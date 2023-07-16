import Transaction from './Transaction';
import Pagination from './Pagination';

export default interface TransactionSearchResult {
    transactions: Transaction[];
    pagination: Pagination;
}