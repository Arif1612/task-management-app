import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { signIn, google } = useContext(AuthContext);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  console.log(location);

  // location redirect
  const from = location.state?.from?.pathname || "/";


  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setErrorMessage("The password must be at least 6 characters long.");
      return;
    }

    // sign in ar vitore navigate ta dite hobe  location ar 

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        // Navigate to the route where it come from the private route after successful login
        // navigate("/");
        navigate(from,{replace:true});
        toast("Congratulation Login Successfully");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message); // Display Firebase authentication error message
      });
  };

  /****************************
   * google sign in
   * ******************** */

  const handleGoogleSignIn = () => {
    google()
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);
        // navigate("/");
        navigate(from,{replace:true});
        toast("Congratulation Login Successfully");
      })

      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <form onSubmit={handleLogin}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />

                {errorMessage && (
                  <p className="text-red-700 text-xl font-bold mb-2">
                    {errorMessage}
                  </p>
                )}

                <label className="label">
                  <p className="block text-red-700  font-semibold">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-green-700 ">
                      Register
                    </Link>
                  </p>
                </label>
              </div>

              {/* photo url */}
              <div className="form-control mt-2">
                <button className="btn btn-success">Login</button>
              </div>

              <p className="text-center">Or</p>

              <div className="form-control mt-2">
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-warning"
                >
                  Login With Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
