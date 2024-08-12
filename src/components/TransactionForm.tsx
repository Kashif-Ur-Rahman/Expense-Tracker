import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../redux/transactionSlice';
import Button from './Button';
import { Transaction } from '../redux/transactionSlice'; 

const TransactionForm: React.FC = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<Omit<Transaction, 'id'>>({
    name: '',
    transactionType: 'Income',
    amount: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'amount' ? parseFloat(value) : value as 'Income' | 'Expenses',
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.name && formData.amount) {
      const newTransaction: Transaction = {
        ...formData,
        id: Date.now().toString(),
      };

      dispatch(addTransaction(newTransaction));
      setFormData({ name: '', transactionType: 'Income', amount: 0 });
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md w-1/2 mr-4">
      <form onSubmit={handleSubmit}>
        {/* Form Inputs */}
        <Button type="submit" text="Submit" className="bg-teal-500 text-white py-2 px-4 rounded" />
      </form>
    </div>
  );
};

export default TransactionForm;
