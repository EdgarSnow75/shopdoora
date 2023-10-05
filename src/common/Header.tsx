"use client";
import React, { useEffect, useState } from "react";
import cartIcon from "../../public/cart1.png";
import searchIcon from "../../public/search.png";
import menuIcon from "../../public/menu.png";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div
      className={`navbar transition-all duration-300 px-3 md:px-20 z-30 ${
        isScrolled ? "bg-black fixed" : "bg-red absolute top-0 left-0"
      } `}
    >
      <div className="navbar-start">
        <a
          className="btn btn-ghost normal-case md:text-sm lg:text-xl 
             text-white"
        >
          ShopDoora
        </a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle pr-4  w-10 md:w-12">
          <Image src={searchIcon} alt="Magnifying Glass" />
        </button>
        <button className="btn btn-ghost btn-circle pr-4  w-10 md:w-12">
          <div className="indicator">
            <Image src={cartIcon} alt="Shopping Cart" />
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle w-6 md:w-8">
            <Image src={menuIcon} alt="Menu" className="w-6 md:w-8" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 -right-20 top-12 relative"
          >
            <li>
              <a>Categories</a>
            </li>
            <li>
              <a>Most Popular Products</a>
            </li>
            <li>
              <a>Brand New Products</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
