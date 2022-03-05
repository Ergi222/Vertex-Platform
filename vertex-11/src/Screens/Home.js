import React from "react";
import fr from "../components/images/fr.png";
import arrow from "../components/svg/arrow-long-left.svg";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <div className=" lg:ml-40 lg:mt-40 lg:flex">
          <h1 className="font-neuton lg:w-2/6 repo italic font-bold">
            The best way to get a project done
            <span className="border-b-black border-b-4"> faster</span> is to
            start <span className="border-b-black border-b-4">sooner</span>
          </h1>
          <NavLink to="/hire-developer">
            <img
              src={arrow}
              alt="g"
              className="arrow rotate-180 lg:absolute lg:right-5 lg:top-1/2 w-16"
            />
          </NavLink>
          <img
            src={fr}
            alt="g"
            className="lg:w-2/6 repo-img lg:absolute lg:right-72 lg:top-32"
          />
        </div>
        <div className="lg:absolute left-96 jim lg:ml-60">
          <h2 className="muted italic">Jim Highsmith</h2>
        </div>

        <div className="lg:absolute the-p lg:left-40 lg:mt-7 lg:w-4/12">
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum!
          </p>
          <div className="flex space-x-3 mt-5">
            <a
              className=" border-slate-800 p-3 rounded-full px-14 border-2"
              href="#"
            >
              Find Developers
            </a>
            <a className="bg-1 rounded-full px-14 p-3 text-white" href="#">
              Find Developers
            </a>
            <br />
          </div>
        </div>
      </div>

      <div className="lg:hidden md:hidden">
        <p className="para lg:hidden md:hidden ml-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id leo
          et risus blandit elementum.Pellentesque pretium, neque ac rhoncus
          porta, lacus mauris fermentum justo, id feugiat ex mi vel mauris.
        </p>

        <h2 className="muted pt mr-2 text-right italic">Jim Highsmith</h2>

        <img
          src={fr}
          alt="g"
          className="lg:w-2/6 lg:hidden lg:absolute lg:right-72 lg:top-32"
        />
        <div className="grid place-items-center">
          <a
            className=" border-slate-800 flex p-3 rounded-full px-32 border-2"
            href="#"
          >
            Find Developers
          </a>

          <a
            className="bg-1 mt-2 rounded-full flex px-32 p-3 text-white"
            href="#"
          >
            Find Developers
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
