import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import MyProduct from "./MyProduct";
import useTitle from '../../hooks/useTitle';

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  useTitle('My Products')

  const { data, isLoading } = useQuery({
    queryKey: ["myproducts", user?.email],
    queryFn: () =>
      fetch(`http://localhost:5000/myproducts/${user.email}`).then((res) =>
        res.json()
      ),
  });
  if (isLoading) {
    return;
  }

  return (
    <div className="lg:container mx-auto">
      <h2 className="text-2xl font-semibold tracking-tight my-5 text-indigo-500 xl:text-3xl dark:text-white">
        My Added Products
      </h2>
      <div className=" mx-auto grid lg:grid-cols-3 gap-5">
        {data.map((d, i) => (
          <MyProduct key={i} p={d}></MyProduct>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
