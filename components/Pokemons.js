"use client";
import React from "react";
import useFetch from "../hooks/useFetch";

const Pokemons = () => {
  const { data } = useFetch();

  const colorTypes = {
    fire: "bg-fire-type",
    normal: "bg-normal-type",
    bug: "bg-bug-type",
    electric: "bg-electric-type",
    grass: "bg-grass-type",
    rock: "bg-rock-type",
    dark: "bg-dark-type",
    fairy: "bg-fairy-type",
    flying: "bg-flying-type",
    ground: "bg-ground-type",
    poison: "bg-poison-type",
    steel: "bg-steel-type",
    dragon: "bg-dragon-type",
    fighting: "bg-fighting-type",
    ghost: "bg-ghost-type",
    ice: "bg-ice-type",
    psychic: "bg-psychic-type",
    water: "bg-water-type",
  };

  return (
    <>
      {data.map((pokemon) => {
        const {
          id,
          name,
          sprites: { front_default: img },
          types: { ...types },
        } = pokemon;

        const pokemonTypes = Object.values(types).map((entry) => {
          return entry.type.name;
        });

        return (
          <article
            className="bg-[#FEEFDD] w-40 h-56 rounded-lg flex flex-col justify-center items-center animate-zoom-in"
            key={id}
          >
            <div className="rounded-lg">
              <img src={img} alt="pokemon splashart" />
            </div>
            <div className="flex flex-col items-center">
              <p className="text-black capitalize">{name}</p>
              <span className="text-gray-500">#00{id}</span>
            </div>
            <section className="p-2 flex flex-col justify-center text-center capitalize">
              {pokemonTypes.length > 1 ? (
                <div className="flex flex-row gap-3 justify-between">
                  <p
                    className={`${colorTypes[pokemonTypes[0]]} rounded-lg p-1`}
                  >
                    {pokemonTypes[0]}
                  </p>
                  <p
                    className={`${colorTypes[pokemonTypes[1]]} rounded-lg p-1`}
                  >
                    {pokemonTypes[1]}
                  </p>
                </div>
              ) : (
                <p className={`${colorTypes[pokemonTypes[0]]} rounded-lg p-1`}>
                  {pokemonTypes[0]}
                </p>
              )}
            </section>
          </article>
        );
      })}
    </>
  );
};

export default Pokemons;
