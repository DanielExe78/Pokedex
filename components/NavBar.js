"use client";
import React from "react";
import { CgMenuGridR } from "react-icons/cg";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import logo from "../public/nav_logo.png";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="w-screen h-[50px] flex place-items-center justify-between">
      <section>
        <button className="text-black flex">
          <CgMenuGridR size={30} />
        </button>
      </section>
      <picture>
        <button className="flex">
          <Image src={logo} alt="logo" />
        </button>
      </picture>
      <section>
        <button className="text-black flex">
          <HiOutlineMagnifyingGlass size={30} />
        </button>
      </section>
    </nav>
  );
};

export default NavBar;
