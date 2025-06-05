import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Background Image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1950&q=80')",
        }}
      ></div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-green-950/80 z-10"></div>

      <div className="relative z-20 container mx-auto px-4 py-28 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left content */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Power Up Your Life with{" "}
            <span className="text-green-400">Tech Deals</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0">
            Discover exclusive offers on the latest gadgets, laptops, and more —
            all in one place at <span className="text-green-300 font-semibold">NestShop</span>.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link to="/products">
              <button className="bg-green-500 hover:bg-green-600 transition duration-300 px-8 py-3 rounded-full text-white text-lg font-medium shadow-lg">
                Shop Now
              </button>
            </Link>
            <Link to="/about">
              <button className="border border-white hover:bg-white hover:text-black transition duration-300 px-8 py-3 rounded-full text-white text-lg font-medium">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Right image with stylish clip effect */}
        <div className="flex-1 hidden lg:flex justify-center items-center">
          <div className="w-full max-w-md relative group">
            <img
              src="/public/images/z2h4fcdz.jpg"
              alt="Tech Gadget"
              className="w-full h-auto object-cover rounded-3xl shadow-2xl transition-transform duration-300 group-hover:scale-105 clip-path-style"
            />
            {/* Optional: gradient overlay or border effect */}
            <div className="absolute inset-0 rounded-3xl border-4 border-green-500 opacity-20 group-hover:opacity-40 transition duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
