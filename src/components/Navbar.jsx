import React from "react";
import { Menu } from "./Menu";
import { Cards } from "./Cards";

const Navbar = () => {
  return (
    <div className="bg-white  shadow-2xl bg-grey-700">
      <div className="max-w-[1300px] mx-auto p-4 flex justify-between items-center">
        
          
            <div className="flex items-center ">
              <img src="/images/Vector.svg" alt=""></img>
              <h2 className="ml-2 font-bold text-lg">LaslasVPN</h2>
            </div>
     
          <div className="px-4 cursor-pointer md:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
       

        <ul className="hidden md:flex items-center gap-6 text-lg pop-up">
          <li className="cursor-pointer pop-up">
            <a href="">Home</a>
          </li>
          <li className="cursor-pointer pop-up">
            <a href="">About</a>
          </li>
          <li className="cursor-pointer pop-up">
            <a href="">Features</a>
          </li>
          <li className="cursor-pointer pop-up">
            <a href="">Pricing</a>
          </li>
          <li className="cursor-pointer pop-up">
            <a href="">Testimonials</a>
          </li>
          <li className="cursor-pointer pop-up">
            <a href="">Help</a>
          </li>
        </ul>

        <div className="flex justify-around items-center m-3 pop-up">
          <div><button className="mr-4 rounded-full border-red-500 border-2 w-20 pop-up">Sign Up</button></div>
          <div>
          <button className="mr-4 rounded-full border-red-500 border-2 w-20 bg-red-600 text-white pop-up">
          Search
        </button>
          </div>
          
        </div>

       
      </div>
      <Menu />
      <Cards />
    </div>
  );
};

export default Navbar;
