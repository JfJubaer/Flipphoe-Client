import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useTitle from '../../hooks/useTitle';

const Admin = () => {
    useTitle('All Buyers')
    const { data: buyers = [] } = useQuery({
        queryKey: ["buyer"],
        queryFn: () =>
            fetch("http://localhost:5000/buyer").then((res) => res.json()),
    });

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`http://localhost:5000/buyer/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => { })

        }
    }
    return (
        <div className="overflow-x-auto my-10 lg:container mx-auto ">
            <h2 className="text-2xl font-semibold tracking-tight my-5 text-indigo-500 xl:text-3xl dark:text-white">
                All Buyers
            </h2>
            <table className="table w-full">
                {buyers.map((b, i) => <thead key={i}>
                    <tr className='mt-5 border'>
                        <th>Role : Buyer</th>
                        <th>Name : {b.name}</th>
                        <th>Email : {b.email}</th>
                        <th><button className='text-red-600' onClick={() => handleDelete(b._id)}>Delete</button></th>
                    </tr>
                </thead>)}

            </table>
        </div>

    );
};

export default Admin;