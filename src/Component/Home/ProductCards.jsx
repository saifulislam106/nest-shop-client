import axios from "axios";
import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

const ProductCards = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "https://nest-shop-server-six.vercel.app/all-products"
        );
        setItems(res.data.products);
        console.log(res.data.products);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h3 className="text-3xl font-bold text-center my-10">Our Products</h3>
      <div className="grid lg:grid-cols-3 gap-5">
        {items?.map((product) => (
          <SingleProduct key={product._id} product={product}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
