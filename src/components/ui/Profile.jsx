import React from "react";

const Profile = ({src, title, description, cta }) => {
  return (
    <>
      <div className="hero flex justify-center items-center -mt-100">
        <div className="hero-content flex flex-col justify-center align-middle items-center lg:flex-row">
          <img
            src={src}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-6xl text-white font-bold">{title}</h1>
            <p className="py-6 text-white text-2xl">{description}</p>
            <button className="btn btn-primary">{cta}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
