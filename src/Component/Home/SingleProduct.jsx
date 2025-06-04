const SingleProduct = ({ product }) => {
  const { title, price, category, description, imageUrl } = product;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Product Image */}
      <div className="w-full h-56 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Content */}
      <div className="p-5 space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-green-600 font-medium">{category}</p>
        <p className="text-gray-600 text-sm">{description?.slice(0, 80)}...</p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-green-700">${price}</span>
          <button className="btn btn-sm bg-green-700 hover:bg-green-800 text-white rounded-full px-4">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
