import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";

 // imgbb url
 const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const Register = () => {
 
 
  const { createUser,  updateUserProfile,  loading, setLoading} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [errorMessage, setErrorMessage] = useState("");

  // console.log(location);
  // location redirect
  const from = location.state?.from?.pathname || "/";

  const handleRegister = (event) => {
    event.preventDefault();
     // imgbb url
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const bio = form.bio.value;

    // image upload
    const image= form.image.files[0];
    const formData = new FormData();
    formData.append('image',image);
    const url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
    // console.log(img_hosting_url);
    // console.log(formData)
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(imageData => {
        const imageUrl = imageData.data.display_url

        createUser(email, password)
          .then(result => {
            updateUserProfile(name, imageUrl, bio)
              .then(() => {
                toast.success('Signup successful')
                navigate(from, { replace: true })
              })
              .catch(err => {
                setLoading(false)
                console.log(err.message)
                toast.error(err.message)
              })
          })
          .catch(err => {
            setLoading(false)
            console.log(err.message)
            toast.error(err.message)
          })
      })
      .catch(err => {
        setLoading(false)
        console.log(err.message)
        toast.error(err.message)
      })

   
  };

  // main return
  return (
    <div className="hero min-h-screen bg-base-200">
      <form onSubmit={handleRegister}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              {/* name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  required
                  className="input input-bordered"
                />
              </div>
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

                {/* image */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image</span>
                  </label>
                  <input
                    required
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
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

              
             {/*  bio */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Bio</span>
                </label>
                <textarea className="textarea textarea-bordered" placeholder="Bio"  name="bio" required></textarea>
                {/* <input
                  name="email"
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  required
                /> */}
              </div>
                {/* eroor message */}
                {errorMessage && (
                  <p className="text-red-700 text-xl font-bold mb-2">
                    {errorMessage}
                  </p>
                )}
                <label className="label">
                  <p className=" block text-red-700 font-semibold">
                    Already have an account?
                    <Link to="/login" className="text-green-700 text ml-2">
                      Login
                    </Link>
                  </p>
                </label>
              </div>

              {/* register */}
              <div className="form-control mt-2">
                <button className="btn btn-success">Register</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
