import { Player } from "@lottiefiles/react-lottie-player";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import useTitle from "../../hooks/useTitle";
import Modal from "./Modal";
// import Modal from "./Modal";
import Product from "./Product";

const Products = () => {
  useTitle("Products")
  const [p, setP] = useState({});
  const { user } = useContext(AuthContext);
  const { data: products = [] } = useQuery({
    queryKey: ["products123"],
    queryFn: () =>
      fetch("https://server-jfjubaer.vercel.app/products").then((res) => res.json()),
  });
  return (
    <div className="lg:container mx-auto">
      <div>
        <div className="lg:flex items-center">
          <div>
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Explore Our Products
              <span className="sm:block"> at reasonable cost </span>
            </h1>
          </div>
          <div>
            <Player
              autoplay
              loop
              src="https://assets5.lottiefiles.com/packages/lf20_Ssbj3iUBzB.json"
              style={{ height: "300px", width: "300px" }}
            ></Player>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 my-10">
        {products.map((p, i) => (
          <Product key={i} p={p} setP={setP}></Product>
        ))}
      </div>
      {user && <Modal p={p} />}
    </div>
  );
};

export default Products;
