import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Transaction {
  id: string;
  name: string;
  transactionType: 'Income' | 'Expenses';
  amount: number;
}

interface State {
  transactions: Transaction[];
}

const initialState: State = {
  transactions: [],
};

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction(state, action: PayloadAction<Transaction>) {
      state.transactions.push(action.payload);
    },
    deleteTransaction(state, action: PayloadAction<string>) {
      state.transactions = state.transactions.filter(
        (transaction) => transaction.id !== action.payload
      );
    },
  },
});

export const { addTransaction, deleteTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;


export type TransactionState = State;
