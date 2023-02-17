import React from 'react';
import { toast } from 'react-hot-toast';
import { FaCheck } from 'react-icons/fa';

const MyProduct = ({ p }) => {
    const {
        name,
        picture,
        originalPrice,
        resalePrice,
        location,
        date,
        isVerified,
        seller,
        _id
    } = p;
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/myproducts/${id}`, {
            method: 'delete'
        })
            .then(res => res.json())
            .then(data => toast.success('item deleted'))
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-2xl my-10">
                <figure>
                    <img className="h-60" src={picture} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>originalPrice : {originalPrice}$</p>
                    <p>resalePrice : {resalePrice}$</p>
                    <p>location : {location}</p>
                    <p className="flex items-center">
                        seller : {seller}{" "}
                        {isVerified && (
                            <span className="text-green-600">
                                {" "}
                                <FaCheck />
                            </span>
                        )}
                    </p>
                    <p>date : {date}</p>
                    <div className="card-actions justify-end">
                        <label onClick={() => handleDelete(_id)} className="btn btn-danger">
                            Delete
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProduct;