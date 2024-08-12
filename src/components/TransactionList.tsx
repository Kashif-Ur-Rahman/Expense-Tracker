import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './../redux/store';
import { addItem, removeItem, clearCart } from './../redux/cartSlice';

const CartComponent: React.FC = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch<AppDispatch>();

  const handleAddItem = (item: any) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeItem(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="bg-white p-6 rounded shadow-md w-1/2 ml-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between bg-green-50 p-4 rounded shadow">
            <div>{item.name} - ${item.price}</div>
            <button
              className="bg-red-500 text-white py-1 px-2 rounded"
              onClick={() => handleRemoveItem(item.id)}
            >
              REMOVE
            </button>
          </div>
        ))}
      </div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default CartComponent;
