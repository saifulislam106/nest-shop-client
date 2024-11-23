import { FaHome, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold text-center mb-5">Contact Us</h1>
      <p className="text-gray-500 text-center lg:w-1/2 mx-auto">
        We'd love to hear from you! If you have any questions, feedback, or need
        assistance, feel free to reach out. Our customer support team is here to
        help.
      </p>
      <div className="mt-10 ">
        <div className="lg:flex justify-around items-center ">
        <div className=" space-y-8 ">
            <div className="flex items-center gap-4">
                <div className="bg-gray-200 p-4 rounded-full">
                <FaHome />
                </div>
                <div>
                    <h5 className="text-lg font-medium">Address</h5>
                    <p>Rahman bhaban, 2th floor, Oxigen, chattagram</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="bg-gray-200 p-4 rounded-full">
                <FaPhone />
                </div>
                <div>
                    <h5 className="text-lg font-medium">Phone</h5>
                    <p>01725400000</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="bg-gray-200 p-4 rounded-full">
                <MdEmail />
                </div>
                <div>
                    <h5 className="text-lg font-medium">Email</h5>
                    <p>nestshop@gmail.com</p>
                </div>
            </div>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h3 className="text-2xl font-bold px-8 pt-4">Send Message</h3>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type=""
                  className="input input-bordered"
                />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-green-500 rounded-full">Submit Now</button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
