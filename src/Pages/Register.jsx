import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import GoogleLoginRegistation from "../AuthProvider/GoogleLoginRegistation";

const Register = () => {
  const { CreateUser } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const email = data.email;
    const role = data.role;
    const status = role === "Buyer" ? "approved" : "pending";
    const wishlist = [];
    console.log(email, role, status, wishlist);
    const userData = { email, role, status, wishlist };

    // Uncomment if you intend to register the user and send data to your server
    CreateUser(data.email, data.password).then(() => {
      axios
        .post("https://nest-shop-server-5fq9.onrender.com/users", userData)
        .then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Registration successful",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          }
        });
    });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card lg:flex w-full justify-end items-center sm:max-w-sm lg:max-w-xl ml-10">
            <img
              className="w-full object-cover"
              src="/images/registation.jpg"
              alt="Registration"
            />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-3xl text-center font-bold mt-8">
              Register now!
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-red-500 font-light text-sm">
                    Email is required
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: true,
                    minLength: 8,
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/i,
                  })}
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500 font-light text-sm">
                    Password is required
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500 font-light text-sm">
                    Password must have at least 8 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500 font-light text-sm">
                    Password must have at least one uppercase , one lowercase
                    ,one number and one special character
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 font-light text-sm">
                    Both passwords must match
                  </p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Role</span>
                </label>
                <select
                  className="select select-bordered w-full max-w-xs"
                  {...register("role", { required: true })}
                >
                  <option>Buyer</option>
                  <option>Seller</option>
                  <option>Admin</option>
                </select>
                {errors.role && (
                  <p className="text-red-500 font-light text-sm">
                    You must have a role
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
              <div>
                <GoogleLoginRegistation></GoogleLoginRegistation>
              </div>
              <div className="my-5 text-center text-sm">
                <p>
                  Already have an account? Please{" "}
                  <Link className="text-blue-500" to="/login">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
