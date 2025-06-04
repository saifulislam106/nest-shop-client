import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-green-900 via-black to-green-950 text-white">
      <div className="container mx-auto px-4 py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Left - Text Content */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Discover the Best Deals <br />
            at <span className="text-green-400">NestShop</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto lg:mx-0">
            Your one-stop marketplace for everyday essentials, exclusive offers,
            and quality products.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link to="/products">
              <button className="btn bg-green-600 hover:bg-green-700 text-white rounded-full px-6 py-2">
                Shop Now
              </button>
            </Link>
            <Link to="/about">
              <button className="btn bg-transparent border border-white hover:bg-white hover:text-black rounded-full px-6 py-2">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Right - Optional Image */}
        <div className="flex-1">
          <img
            src="/banner-illustration.png" // Place an optimized image in public/
            alt="NestShop Banner"
            className="w-full max-w-md mx-auto lg:mx-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
