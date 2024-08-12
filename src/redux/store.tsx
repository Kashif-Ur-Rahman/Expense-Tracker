import { configureStore } from '@reduxjs/toolkit';
import transactionReducer from './transactionSlice';
import cartReducer from './cartSlice'; // Ensure this import is present

export const store: any = configureStore({
  reducer: {
    transactions: transactionReducer,
    cart: cartReducer, // Add the cart reducer here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
