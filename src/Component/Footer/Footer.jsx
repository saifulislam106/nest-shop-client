import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-4 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold mb-2">
            Nest<span className="text-green-500">S</span>hop
          </h2>
          <p className="text-gray-400">
            Your trusted online destination for quality products at unbeatable
            prices.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <nav className="flex flex-col space-y-2">
            <Link to="/" className="hover:text-green-500 transition">
              Home
            </Link>
            <Link to="/about" className="hover:text-green-500 transition">
              About Us
            </Link>
            <Link to="/contacts" className="hover:text-green-500 transition">
              Contact
            </Link>
          </nav>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="hover:text-green-500 transition">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-green-500 transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-green-500 transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-green-500 transition">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} NestShop Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
