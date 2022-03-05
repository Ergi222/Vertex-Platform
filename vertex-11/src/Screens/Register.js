import React from "react";
import oke from "../components/images/sng.png";
import vlogo from "../components/images/logo1.png";
import gimg from '../components/svg/google.svg'
import fimg from '../components/svg/facebook.svg'

import { useNavigationType } from "react-router-dom";
const Register = () => {
  

 
  
  return (
    <div className="lg:flex">
      <div className="lg:ml-72 lg:mt-24 justify-center lg:w-2/3">
        <a href="/">
          <img className="h-36 ml-16" src={vlogo} alt="logo" />
        </a>
        <h1 className="font-neuton ml-9 italic lg:flex lg:w-1/3">Sign Up</h1>

        <div>
          <button
             type="text"
            className="rounded-full items-center justify-center flex w-96 mt-2 py-2 px-8 border-v border-2 text-lg"
          >Continue with Google <img className="ml-28" src={gimg} alt="img" /></button>
          <button
            className="rounded-full items-center justify-center flex w-96 mt-2 py-2 px-8 border-v border-2 text-lg"
          >Continue with Facebook <img className=" ml-24" src={fimg} alt="img" /></button>
          <br />
        
          <h1 className="lg:ml-44">or</h1>
          <h2 className="lg-text mt-8">Username or Email</h2>
          <input
            placeholder="examlpe"
            type="text"
            required
            className="rounded-full w-96 mt-2 py-2 px-8 border-v border-2 text-lg"
          /><br />
          <br /><a
          href="/continue-register"
          className="rounded-full bg-v p-2 py-3 px-40">
            Continue
          </a>
          <br />
          <h2 className="lg:ml-28 mt-2 acc-font">Have an account</h2>

          <a href="/login" className="lg:ml-40 acc-link">
            Sign In
          </a>
        </div>
      </div>
      <img src={oke} alt="img" className="lg:w-1/3 mr-32" />
    </div>
  );
};

export default Register;
