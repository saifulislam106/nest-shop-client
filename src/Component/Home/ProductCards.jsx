import axios from "axios";
import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

const ProductCards = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "https://nest-shop-server-5fq9.onrender.com/all-products"
          // "http://localhost:4000/all-products"
        );
        setItems(res.data.products);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-extrabold text-center mb-10 text-white">
          Our <span className="text-green-500">Products</span>
        </h3>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <span className="loading loading-spinner loading-lg text-green-500"></span>
          </div>
        ) : items.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((product) => (
              <SingleProduct key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 text-lg">
            No products found.
          </p>
        )}
      </div>
    </section>
  );
};

export default ProductCards;
