import React from "react";
import { NavLink } from "react-router-dom";
import img1 from "../components/images/1.png";
import Navbar from "../components/Navbar";
import arrow from "../components/svg/arrow-long-left.svg";

const HireDeveloper = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <div className="lg:ml-32 lg:mt-11">
          <div className="lg:flex">
            <h1 className="font-neuton repo italic lg:w-1/3">
              Hiring a developer for your project has never been
              <span className="border-b-black border-b-4"> easier</span>
            </h1>
            <div className="lg:w-2/5 the-mg nd lg:absolute lg:right-0">
              <NavLink to="/find-work">
                <img
                  src={arrow}
                  alt="g"
                  className="rotate-180 lg:absolute lg:mt-60 lg:right-6 w-16"
                />
              </NavLink>
              <img src={img1} alt="w" className="" />
              <p className="text-left green-text ml-11 underline underline-offset-1">
                Browse the developers and chose the perfect for you
              </p>
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
            porttitor nibh condimentum vitae.
          </p>
          <img src={img1} alt="w" className="lg:hidden md:hidden" />
          <p className="text-left lg:hidden md:hidden green-text lg:ml-11 mg:ml-11 ml-2 underline underline-offset-1">
            Browse the developers and chose the perfect for you
          </p>
          <div className="mt-9 buto">
            <a
              className=" border-slate-800 p-3 rounded-full px-32 border-2"
              href="#"
            >
              Find Developers
            </a>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default HireDeveloper;
