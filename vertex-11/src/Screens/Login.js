import React from "react";
import oke from "../components/images/Image.png";
import vlogo from "../components/images/logo1.png";

const Login = () => {
  return (
    <div className="lg:flex">
      <div className="lg:ml-72 lg:mt-24 justify-center lg:w-2/3">
        <a href="/">
          <img className="h-36 ml-16" src={vlogo} alt="logo" />
        </a>
        <h1 className="font-neuton ml-9 italic lg:w-1/3">Sign In</h1>

        <div>
          <h2 className="lg-text mt-8">Username or Email</h2>
          <input
            placeholder="examlpe"
            type="text"
            className="rounded-full w-96 mt-2 py-2 px-8 border-v border-2 text-lg"
          />
          <h2 className="lg-text">Password</h2>
          <input
            placeholder="password"
            type="password"
            className="rounded-full placeholder:text-2xl w-96 mt-2 py-2 px-8 border-v border-2 text-lg"
          />
          <br />
          <br />
          <button className="rounded-full mt-8 bg-v p-2 py-3 px-40">
            Continue
          </button>
          <br />
          <h2 className="lg:ml-28 mt-2 acc-font">Don't have an account</h2>

          <a href="/register" className="lg:ml-32 acc-link">
            Create account
          </a>
        </div>
      </div>
      <img src={oke} alt="img" className="lg:w-1/3 mr-32" />
    </div>
  );
};

export default Login;
