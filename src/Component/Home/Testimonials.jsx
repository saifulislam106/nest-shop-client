const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Happy Customer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "NestShop made my shopping experience smooth and enjoyable. Great products and even better service!",
  },
  {
    name: "James Smith",
    role: "Frequent Buyer",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    quote:
      "Excellent quality and fast delivery. Highly recommend NestShop to everyone!",
  },
  {
    name: "Emily Davis",
    role: "Verified Buyer",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
    quote:
      "The customer support team was so helpful. NestShop is now my go-to for everything!",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          What Our Customers Say
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-green-500"
              />
              <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
              <h4 className="text-lg font-semibold text-green-400">
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
