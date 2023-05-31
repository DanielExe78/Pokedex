"use client";
import React from "react";
import useFetch from "../hooks/useFetch";
import Image from "next/image";
import placeholder from "../public/scard_img.png";

const Pokemons = () => {
  const { data, isLoading, error } = useFetch();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <article
      className="bg-[#FEEFDD] w-56 h-56 rounded-lg flex flex-col justify-center items-center"
      key={data.id}
    >
      <div className="rounded-lg">
        <img src={data.sprites.front_default} alt="pokemon splashart" />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-black capitalize">{data.name}</p>
        <span className="text-gray-500">#000</span>
      </div>
      <section className="bg-gradient-to-r from-[#C72101] to-[#EF3F0D] rounded-lg p-1 w-[70px] h-[30px] flex flex-col justify-center text-center capitalize">
        <p>{data.types[0].type.name}</p>
      </section>
    </article>
  );
};

export default Pokemons;
