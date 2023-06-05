"use client";
import React from "react";
import { CgMenuGridR } from "react-icons/cg";
import logo from "../public/nav_logo.png";
import Image from "next/image";
import SearchForm from "./SearchForm";

const NavBar = () => {
  return (
    <nav className="w-screen h-[50px] flex place-items-center justify-between relative">
      <section>
        <button className="text-black flex">
          <CgMenuGridR size={30} />
        </button>
      </section>
      <picture>
        <button className="flex pr-7">
          <Image src={logo} alt="logo" />
        </button>
      </picture>
      <section>
        <SearchForm />
      </section>
    </nav>
  );
};

export default NavBar;
