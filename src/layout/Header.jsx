import React from "react";
import { NavLink } from "react-router-dom";

export default function Header({ title, next }) {
  return (
    <div>
      <div
        className="mt-20 lg:mt-24 bg-center bg-cover h-[16rem] max-w-screen-2xl mx-auto lg:h-[18rem]"
        style={{ backgroundImage: "url('/public/image/carousel-1.jpg')" }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900/60">
          <div className="text-center">
            <h1 className="text-5xl font-bold capitalize max-w-3xl text-white lg:text-6xl">
              {title}
            </h1>
            <div className="px-5 flex items-center py-4 overflow-x-auto whitespace-nowrap">
              <NavLink to="/" className="text-white hover:text-amber-500">
                Home
              </NavLink>
              <span className="text-white px-2">/</span>
              <NavLink to="/about" className="capitalize text-amber-500">
                {title}
              </NavLink>

              <span className="text-white px-2">/</span>
              <NavLink
                to={`/${next}`}
                className="text-white capitalize hover:text-amber-500"
              >
                {next}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
