import React from "react";
import oke from "../components/images/goca.png";
import vlogo from "../components/images/logo1.png";

const ContinueRegister = () => {
  return (
    <div className="lg:flex mt-0">
      <div className="lg:ml-72 lg:mt-24 justify-center lg:w-2/3">
        <a href="/">
          <img className="h-36 ml-16" src={vlogo} alt="logo" />
        </a>
        <h1 className="font-neuton ml-9 italic lg:ml-1">Registration</h1>

        <div>
          <div className="lg:flex lg:space-x-44">
            <h1>First Name</h1>
            <h1>Last Name</h1>
          </div>
          <div className="flex space-x-2">
            <input
              placeholder="First Name"
              type="text"
              className="rounded-full w-48 mt-2 py-2 px-8 border-v border-2 text-lg"
            />

            <input
              placeholder="Last Name"
              type="text"
              className="rounded-full w-48 mt-2 py-2 px-8 border-v border-2 text-lg"
            />
          </div>
          <h2>Phone Number</h2>
          <input
            type="number"
            placeholder="Phone Number"
            className="rounded-full placeholder:text-xl w-96 mt-2 py-2 px-8 border-v border-2 text-lg"
          />

          <h2>Region</h2>
          <input
            placeholder="Region"
            type="text"
            className="rounded-full placeholder:text-xl w-96 mt-2 py-2 px-8 border-v border-2 text-lg"
          />
          <h2 className="lg-text">Password</h2>
          <input
            placeholder="Password"
            type="password"
            className="rounded-full placeholder:text-xl w-96 mt-2 py-2 px-8 border-v border-2 text-lg"
          />
          <br />
          <button className="rounded-full mt-8 bg-v p-2 py-3 px-40">
            Continue
          </button>
        </div>
      </div>
      <img src={oke} alt="img" className="lg:w-1/3 mr-32" />
    </div>
  );
};

export default ContinueRegister;
