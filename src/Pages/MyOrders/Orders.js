import React from 'react';

const Orders = ({ o, handleDelete }) => {
    return (
        <thead className='mt-5 border'>
            <tr >
                <th>Product : {o.name}</th>
                <th>Price : {o.price}</th>
                <th><img src={o.picture} className='w-20' alt="Avatar Tailwind CSS Component" /></th>
                <th><button onClick={() => handleDelete(o._id)} className="font-medium text-red-600 dark:text-blue-500 ">Delete</button></th>
            </tr>
        </thead>
    );
};

export default Orders;