import { FaHome, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have a question about features, pricing, or anything else,
            our team is ready to answer all your questions.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-green-600 p-4 rounded-full text-white">
                <FaHome size={20} />
              </div>
              <div>
                <h5 className="text-xl font-semibold">Address</h5>
                <p className="text-gray-400">Rahman Bhaban, 2nd Floor, Oxygen, Chattogram</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-600 p-4 rounded-full text-white">
                <FaPhone size={20} />
              </div>
              <div>
                <h5 className="text-xl font-semibold">Phone</h5>
                <p className="text-gray-400">01725400000</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-600 p-4 rounded-full text-white">
                <MdEmail size={20} />
              </div>
              <div>
                <h5 className="text-xl font-semibold">Email</h5>
                <p className="text-gray-400">nestshop@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block mb-1 text-sm">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm">Phone</label>
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-green-600 hover:bg-green-700 rounded-full text-white font-semibold transition"
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
