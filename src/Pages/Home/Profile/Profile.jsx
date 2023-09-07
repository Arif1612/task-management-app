// Profile.js

import React, { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex justify-center items-center mt-16">
      <div className="card w-96 bg-base-100 shadow-xl ">
        <figure>
          <img src={user?.photoURL} alt={`${user?.displayName}'s Profile`} />
        </figure>
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold ">{user?.displayName}</h2>
          <p>{user?.bio}</p>
         
        </div>
      </div>
    </div>

    
  );
};

export default Profile;