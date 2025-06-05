const faqs = [
  {
    question: "When will my order be shipped?",
    answer:
      "Most orders are processed within 1-2 business days. Delivery times vary based on your location and shipping method selected at checkout.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order ships, you'll receive an email with tracking info. You can also track it via your account dashboard.",
  },
  {
    question: "What is your return policy?",
    answer:
      "Returns are accepted within 30 days of purchase. Items must be unused and in original condition with tags attached.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "Email us at nestshop@gmail.com or call (123) 456-7890. Support hours: 9am–6pm, Monday–Friday.",
  },
];

const Faqs = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 lg:w-4/5">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="group border border-gray-700 rounded-lg overflow-hidden">
              <input
                type="checkbox"
                id={`faq-${idx}`}
                className="hidden peer"
              />
              <label
                htmlFor={`faq-${idx}`}
                className="flex justify-between items-center cursor-pointer bg-gray-800 px-6 py-4 text-lg font-medium peer-checked:bg-green-700 transition"
              >
                {faq.question}
                <svg
                  className="w-5 h-5 transition-transform duration-300 peer-checked:rotate-45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4v16m8-8H4" />
                </svg>
              </label>
              <div className="bg-gray-800 px-6 py-4 max-h-0 peer-checked:max-h-48 overflow-hidden transition-all duration-500 ease-in-out text-gray-300">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
