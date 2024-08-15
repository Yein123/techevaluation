import React, { useState } from 'react';
import logo from '../cs-soc-official.svg'; // Adjust the path if necessary

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div id="navbar" className="flex min-h-[6rem] px-6 md:px-12 fixed z-30 bg-green-200 text-white transition-all w-full">
      <div className="navbar-start w-[50%] ">
        <a href="/" className="text-xl py-2 h-fit">
          <div className="flex items-center justify-start gap-4 my-5">
            <img src={logo} alt="CS Society Logo" className="w-16 h-16" />
            <div className="font-logo text-left font-normal tracking-wider text-xl -z-10">
              <div className="leading-none sm:leading-snug">USM Computer</div>
              <div className="leading-none">Science Society</div>
            </div>
          </div>
        </a>
      </div>
      <div className="navbar-end w-[50%] my-4 pt-2">
        <ul className="items-center justify-end p-0 hidden md:flex gap-x-6 px-16 py-4">
          <li><a href="/about" className="text-lg ">About</a></li>
          <li><a href="/events" className="text-lg">Events</a></li>
        </ul>
        <div className="dropdown">
          <div className='flex justify-end py-2 px-2 md:py-0'>
            <button onClick={toggleDropdown} className="btn btn-ghost md:hidden px-2">
              <svg width="1em" height="2.1em" viewBox="0 0 448 512" className="text-xl items-center justify-end" data-icon="fa-solid:bars">
                <symbol id="ai:fa-solid:bars">
                  <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16m0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16m0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16" />
                </symbol>
                <use xlinkHref="#ai:fa-solid:bars"></use>
              </svg>
            </button>
          </div>
          <div className='flex justify-end'>
            <ul className={`dropdown-content absolute flex-col mt-3 p-2 shadow rounded-lg w-48 bg-green-100 ${isDropdownOpen ? 'block' : 'hidden'}`}>
              <li><a href="/about" className="text-lg flex justify-center hover:bg-green-200">About</a></li>
              <li><a href="/events" className="text-lg flex justify-center hover:bg-green-200">Events</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
