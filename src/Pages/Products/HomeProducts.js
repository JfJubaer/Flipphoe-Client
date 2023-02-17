
import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Modal from './Modal';
import Product from './Product';

const HomeProducts = () => {
    const { data: products = [] } = useQuery({
        queryKey: ["products123"],
        queryFn: () =>
            fetch("http://localhost:5000/products").then((res) => res.json()),
    });
    const [p, setP] = useState({});
    const { user } = useContext(AuthContext);
    return (

        <><h3 className='text-5xl font-bold text-indigo-500 text-center my-10'>See our products</h3>
            <div className="container mx-auto grid lg:grid-cols-3 gap-2 my-10">

                {products.slice(0, 3).map((p, i) => (
                    <Product key={i} setP={setP} p={p}></Product>
                ))}

            </div>
            {user && <Modal p={p} />}
            <div className='text-center mb-10'>
                <Link to='/products'>
                    <button type="button" className="text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800">
                        Show All
                    </button>
                </Link>
            </div>
        </>


    );
};

export default HomeProducts;