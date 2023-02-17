import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Orders from './Orders';
import useTitle from '../../hooks/useTitle'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { toast } from 'react-hot-toast';

const stripePromise = loadStripe('pk_test_51MbPCuFJhUO1VhGGmIibaulG90q14OORD9zroa3X5HInVuv9Am8LuNiaGsoxx2qfCypWShiozicwK6PWTrznwc1j00MmxoTqf0');

const MyOrders = () => {
  const data = useLoaderData();
  useTitle('Orders');
  const prices = data.map(i => i.price);
  const total = prices.reduce(function (a, b) { return a + b; }, 0);
  const handleDelete = (id) => {
    fetch(`https://server-jfjubaer.vercel.app/orders/${id}`, {
      method: 'delete'
    })
      .then(res => res.json())
      .then(data => toast.success('item deleted'))
  }
  if (data.length === 0) {
    return <div className="overflow-x-auto my-10 lg:container mx-auto ">
      <h2 className="text-2xl font-semibold tracking-tight my-5 text-red-500 xl:text-3xl dark:text-white">
        No orders
      </h2>

    </div>
  }
  return (
    <div className="overflow-x-auto my-10 lg:container mx-auto ">
      <h2 className="text-2xl font-semibold tracking-tight my-5 text-indigo-500 xl:text-3xl dark:text-white">
        My orders
      </h2>
      <table className="table w-full">
        {data.map((o, i) => <Orders key={i} handleDelete={handleDelete}
          o={o}
        ></Orders>)}
      </table>
      <div className='m-10 text-center'>
        <h2 >Total Amount : {total}$</h2>
        <Elements stripe={stripePromise}>
          <CheckoutForm total={total} />
        </Elements>
      </div>
    </div>
  );
};

export default MyOrders;
