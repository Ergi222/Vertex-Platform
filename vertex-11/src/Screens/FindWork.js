import React, { useState } from "react";
import img1 from "../components/images/gh.png";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import arrow from "../components/svg/arrow-long-left.svg";
import { CSSTransition } from "react-transition-group";

const FindWork = () => {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  return (
    <>
      <Navbar />
      <div className="">
        <div className="lg:ml-32 justify-center items-center">
          <div className="lg:flex">
            <h1 className="font-neuton italic repo lg:w-1/3">
              Find great software development
              <span className="border-b-black border-b-4"> work</span>
            </h1>

            <div className="lg:w-2/6 the-mg lg:absolute lg:mr-20 lg:right-0">
              <img src={img1} alt="w" className="d-none" />
            </div>
          </div>
        </div>
        <div className="lg:w-2/6 lg:ml-32 lg:mt-9">
          <p className="para p-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            congue mi sagittis dui semper, nec pulvinar magna mollis. Phasellus
            magna augue, pretium quis convallis eu, mollis vel odio. Duis
            fringilla tellus sed est ullamcorper dignissim. Duis vel enim
            accumsan tortor cursus venenatis. Cras eleifend ligula sapien, in
            porttitor nibh condimentum vitae. Morbi eu erat vitae justo dapibus
            tincidunt. Cras et nulla ligula. Sed sagittis elit non tellus
            gravida, sit amet tincidunt felis mattis.
          </p>
          <div className="lg:hidden md:hidden grid place-items-center">
            <img src={img1} alt="w" className="ml-3" />
            <div className=" w-3/4">
              <hr />
              <h2 className="text-center text-2xl net">
                Find a job opportunity and send an request
              </h2>
              <br />
              <br />
              <hr className=" text-zinc-700" />
              <h2 className="text-center text-2xl net">
                Create offers of your programming services for attracting
                customers
              </h2>
              <br />
              <br />
              <div className="grid place-items-center">
                <a
                  className="border-slate-800 p-3 rounded-full px-20 border-2"
                  href="#"
                >
                  Find Oppurtunities
                </a>
              </div>
            </div>
          </div>
          <div className="mt-9">
            <a
              className=" d-none border-slate-800 p-3 rounded-full px-14 border-2"
              href="#"
            >
              Find Oppurtunities
            </a>
            <br />
            <NavLink to="/hire-developer">
              <img src={arrow} alt="g" className="d-none w-16 lg:mt-36" />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindWork;
