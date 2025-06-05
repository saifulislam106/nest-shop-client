import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-200">
          We'd love to hear from you. Let’s start a conversation!
        </p>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-300 mb-6">
            Reach out to us with any questions, concerns, or feedback.
          </p>

          <div className="space-y-4 text-gray-400">
            <div>
              <h4 className="font-bold text-white">Office Address</h4>
              <p>NestShop Limited</p>
              <p>Rahman Bhaban, 2nd Floor</p>
              <p>Oxygen, Chattogram</p>
            </div>

            <div>
              <h4 className="font-bold text-white">Email</h4>
              <a href="mailto:nestshop@gmail.com" className="hover:underline text-green-400">
                nestshop@gmail.com
              </a>
            </div>

            <div>
              <h4 className="font-bold text-white">Phone</h4>
              <a href="tel:01725400000" className="hover:underline text-green-400">
                +880 1725 400000
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
          <form className="space-y-5">
            <div>
              <label className="block mb-1">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block mb-1">Message</label>
              <textarea
                rows={5}
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
