const SingleProduct = ({ product }) => {
  const { title, price, category, description, imageUrl } = product;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
         <img src={imageUrl} alt="" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{category}</p>
          <p>{price}</p>
          <p>{description}</p>
          <div className="card-actions">
            <button className="btn bg-green-500">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
