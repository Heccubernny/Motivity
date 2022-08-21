import React from "react";
import "../../index.css";
const Navbar = () => {
  return (
    <React.Fragment>
      <header className="">
        <nav className="relative flex flex-row items-center justify-between px-2 py-10 bg-gray-700 mb-3 z-50 sticky top-0">
          <div className="brandLogo ">
            <img
              src=""
              className="w-20 ml-20"
              alt="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
            />{" "}
          </div>
          <div className="justify-end">
            <a href="motivity-dc63e.firebaseapp.com">
              <button
                className="text-sky-50 border border-gray-50 hover:bg-blue-500 hover:text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-20 mb-1 ease-linear transition-all duration-150"
                type="button">
                Sign Up
              </button>
            </a>
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
