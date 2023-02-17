import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useTitle from '../../hooks/useTitle';

const AddProducts = () => {
  useTitle('Add Products')
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleAdd = (event) => {
    event.preventDefault();
    console.log("hello");
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const rPrice = form.rPrice.value;
    const category = form.category.value;
    const location = form.location.value;
    const date = form.date.value;
    const seller = form.seller.value;
    const picture = form.picture.value;
    const product = {
      index: 0,
      name: name,
      resalePrice: price,
      originalPrice: rPrice,
      location,
      date,
      categoryId: category,
      seller,
      picture,
      email: user.email
    };
    console.log(product);
    fetch("http://localhost:5000/addproduct", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/myproducts");
      });
    form.reset();
  };
  return (
    <div>
      <form
        onSubmit={handleAdd}
        className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl"
      >
        <p className="text-lg font-medium">Add your product here</p>

        <div className="relative mt-1">
          <input
            type="text"
            name="name"
            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder=" Product Name"
          />

          <span className="absolute inset-y-0 right-4 inline-flex items-center"></span>
        </div>
        <div className="relative mt-1">
          <input
            type="text"
            name="rPrice"
            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder=" Product real Price"
          />

          <span className="absolute inset-y-0 right-4 inline-flex items-center"></span>
        </div>
        <div className="relative mt-1">
          <input
            type="text"
            name="date"
            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="date"
          />

          <span className="absolute inset-y-0 right-4 inline-flex items-center"></span>
        </div>
        <div className="relative mt-1">
          <input
            type="text"
            name="seller"
            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="seller"
          />

          <span className="absolute inset-y-0 right-4 inline-flex items-center"></span>
        </div>
        <div className="relative mt-1">
          <input
            type="text"
            name="picture"
            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="picture"
          />

          <span className="absolute inset-y-0 right-4 inline-flex items-center"></span>
        </div>
        <div className="relative mt-1">
          <input
            type="text"
            name="location"
            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="location"
          />

          <span className="absolute inset-y-0 right-4 inline-flex items-center"></span>
        </div>
        <div className="relative mt-1">
          <input
            type="text"
            name="price"
            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder=" Product Price"
          />

          <span className="absolute inset-y-0 right-4 inline-flex items-center"></span>
        </div>
        <select name="category">
          <option value={"01"}>Handset</option>
          <option value={"02"}>Laptop</option>
          <option value={"03"}>Camera</option>
        </select>

        <button
          type="submit"
          className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
        >
          submit
        </button>
      </form>
      {/*       
      <form
        onSubmit={handleAdd}
        className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl"
        action=""
      >
        <p className="text-lg font-medium">Enroll now!!!</p>

        <div>
          <label for="email" className="text-sm font-medium">
            Product Name
          </label>

          <div className="relative mt-1">
            <input
              type="text"
              name="name"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder=" Product Name"
            />

            <span className="absolute inset-y-0 right-4 inline-flex items-center"></span>
          </div>
        </div>
        <div>
          <label for="email" className="text-sm font-medium">
            Price
          </label>

          <div className="relative mt-1">
            <input
              type="text"
              name="price"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Price"
            />

            <span className="absolute inset-y-0 right-4 inline-flex items-center"></span>
          </div>
        </div>
        <div>
          <label for="email" className="text-sm font-medium">
            original price
          </label>

          <div className="relative mt-1">
            <input
              type="text"
              name="original"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Original"
            />

            <span className="absolute inset-y-0 right-4 inline-flex items-center"></span>
          </div>
        </div>
        <div>
          <label for="email" className="text-sm font-medium">
            Location
          </label>

          <div className="relative mt-1">
            <input
              type="text"
              name="location"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="location"
            />

            <span className="absolute inset-y-0 right-4 inline-flex items-center"></span>
          </div>
        </div>

        <div>
          <label for="email" className="text-sm font-medium">
            Photo URL
          </label>

          <div className="relative mt-1">
            <input
              type="text"
              name="photoURL"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Enter Photo URL"
            />

            <span className="absolute inset-y-0 right-4 inline-flex items-center"></span>
          </div>
        </div>
        <div>
          <label for="email" className="text-sm font-medium">
            Date
          </label>

          <div className="relative mt-1">
            <input
              type="text"
              name="date"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="date"
            />
          </div>
        </div>
        <div>
          <label for="email" className="text-sm font-medium">
            seller
          </label>

          <div className="relative mt-1">
            <input
              type="text"
              name="seller"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Seller"
            />
          </div>
        </div>
        <div>
          <label for="email" className="text-sm font-medium">
            Email
          </label>

          <div className="relative mt-1">
            <input
              type="email"
              name="email"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Email"
            />

            <span className="absolute inset-y-0 right-4 inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
        </div>

        <button
          type="submit"
          className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
        >
          Add
        </button>
      </form> */}
    </div>
  );
};

export default AddProducts;
