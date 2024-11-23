

const Faqs = () => {
  return (
    <div className="lg:w-3/5 flex flex-col mt-20 gap-3 mx-auto">
        <h3 className="font-bold text-2xl text-center mb-4">FAQs</h3>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
        When will my order be shipped?
        </div>
        <div className="collapse-content">
          <p>Most orders are processed within 1-2 business days. Delivery times vary based on your location and shipping method selected at checkout.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
        How can I track my order?
        </div>
        <div className="collapse-content">
          <p>Once your order ships, you will receive an email with tracking information. You can also track your order through your account on our website.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
        What is your return policy?
        </div>
        <div className="collapse-content">
          <p>We accept returns within 30 days of purchase. Items must be in their original condition, unused, and with all tags attached.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
        How do I contact customer support?
        </div>
        <div className="collapse-content">
          <p>You can reach our support team via email at nestshop@gmail.com or call us at (123) 456-7890. Our hours are 9am to 6pm, Monday through Friday.</p>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
