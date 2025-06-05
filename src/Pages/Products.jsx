import axios from "axios";
import { useEffect, useState } from "react";
import SearchBar from "../Component/Product/SearchBar";
import SortByPrice from "../Component/Product/SortByPrice";
import FilterBar from "../Component/Product/FilterBar";
import Loading from "./Loading";
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";
import ProductCard from "../Component/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [uniqueBrand, setUniqueBrand] = useState([]);
  const [uniqueCategory, setUniqueCategory] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://nest-shop-server-5fq9.onrender.com/all-products?title=${search}&page=${page}&limit=9&sort=${sort}&brand=${brand}&category=${category}`
          // `http://localhost:4000/all-products?title=${search}&page=${page}&limit=9&sort=${sort}&brand=${brand}&category=${category}`
        );
        setProducts(res.data.products);
        setUniqueBrand(res.data.brands);
        setUniqueCategory(res.data.categories);
        setTotalPages(Math.ceil(res.data.totalProducts / 9));
      } catch (err) {
        console.error("Failed to fetch products", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [search, sort, brand, category, page]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
    e.target.search.value = "";
  };

  const handleReset = () => {
    setSearch("");
    setSort("");
    setBrand("");
    setCategory("");
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
        All Products
      </h2>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <SearchBar handleSearch={handleSearch} />
        <SortByPrice setSort={setSort} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Sidebar Filters */}
        <aside className="md:col-span-3">
          <FilterBar
            setBrand={setBrand}
            setCategory={setCategory}
            uniqueBrand={uniqueBrand}
            uniqueCategory={uniqueCategory}
            handleReset={handleReset}
          />
        </aside>

        {/* Product Grid */}
        <main className="md:col-span-9">
          {loading ? (
            <Loading />
          ) : products.length === 0 ? (
            <div className="h-64 flex items-center justify-center">
              <p className="text-xl font-semibold text-gray-600 dark:text-gray-300">
                No products found.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-10 flex items-center justify-center gap-4">
              <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
                className="text-2xl disabled:opacity-40 transition hover:scale-110"
              >
                <IoArrowBackCircle />
              </button>
              <span className="text-lg text-gray-700 dark:text-gray-300">
                Page <strong>{page}</strong> of {totalPages}
              </span>
              <button
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages}
                className="text-2xl disabled:opacity-40 transition hover:scale-110"
              >
                <IoArrowForwardCircle />
              </button>
            </div>
          )}
        </main>
      </div>
    </section>
  );
};

export default Products;
