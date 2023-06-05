"use client";
import { createContext, useContext, useEffect, useState } from "react";

export const API_ENDPOINT = `https://pokeapi.co/api/v2/pokemon/`;

export const PokemonContext = createContext();

export const useGlobalContext = () => {
  const context = useContext(PokemonContext);
  if (!context) throw new Error("usePokemon must be used within a provider");
  return context;
};

const getLocalStorage = () => {
  let pokemons = localStorage.getItem("dailyPokemons");

  if (pokemons) {
    return JSON.parse(localStorage.getItem("dailyPokemons"));
  } else {
    return [];
  }
};

const getCurrentDay = () => {
  let currentDay = localStorage.getItem("date");
  if (Number(currentDay) !== new Date().getDate()) {
    localStorage.clear();
    return new Date().getDate();
  } else {
    return JSON.parse(localStorage.getItem("date"));
  }
};

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ msg: "", show: false });
  const [data, setData] = useState([]);
  const [carouselData, setCarouselData] = useState(getLocalStorage());
  const [search, setSearch] = useState("");
  const [lightMode, setLightMode] = useState(false);
  const curDay = getCurrentDay();
  const limit = "?limit=120";

  // CUSTOM STYLES FOR EACH TYPE BACKGROUND COLOR.
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

  // DATA FETCHING WITH UNIQUE VALUES TO RENDER DIFFERENT POKEMONS
  const fetchCarousel = async (url) => {
    const nums = new Set(
      Array.from({ length: 5 }, () => Math.floor(Math.random() * 150) + 1)
    );
    const uniqueNums = Array.from(nums);

    try {
      if (carouselData.length === 0) {
        const response = uniqueNums.map(async (num) => {
          const res = await fetch(`${url}${num}`);
          const data = await res.json();

          return data;
        });
        const promise = await Promise.all(response);
        setCarouselData((oldData) => {
          let newData = promise;
          const newArray = Array.from(newData);
          return newArray;
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // POKEMON FETCHING FOR EACH CARD SHOWED IN THE DEX
  const fetchPokemon = async (url) => {
    // SHOW LOADING COMPONENT WHILE TRYING TO FETCH THE POKEMON DATA
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      // IF SEARCH DATA IS TRUE INSTEAD OF CALLING ALL THE POKEMONS JUST CALL THE ONE WE'RE LOOKING FOR.
      if (!search) {
        const promises = data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          const data = await res.json();

          return data;
        });
        const results = await Promise.all(promises);
        setData(results);
      } else {
        // STORE IT LIKE AN ARRAY SO WE CAN MAP OVER IT IN THE SEARCHFORM COMPONENT.
        setData([data]);
      }

      // SET ERROR MESSAGE TO FALSE IN CASE OF EVERYTHING WORKED WELL
      setError({
        msg: "",
        show: false,
      });

      // SET LOADING TO FALSE THIS WAY HAVING ACCESS TO THE MAIN PAGE
      setIsLoading(false);
    } catch (error) {
      // IN CASE OF ERROR WIPE THE DATA, SHOW AN ERROR MESSAGE AND SHOW IT BY REMOVING THE PRELOADER.
      console.log(error.message);
      setData([]);
      setError({
        msg: "The page you are looking for doesn't exist",
        show: true,
      });
      setIsLoading(false);
    }
  };

  // THE USEEFFECT WILL TRIGGER EVERYDAY SO WE CAN HAVE NEW DAILY POKEMONS
  useEffect(() => {
    fetchCarousel(`${API_ENDPOINT}`);
  }, [curDay]);

  useEffect(() => {
    // WE STORE THEM IN THE LOCAL STORAGE TO PREVENT NEW DAILY POKEMONS EVERYTIME THE RELOAD THE PAGE.
    localStorage.setItem("dailyPokemons", JSON.stringify(carouselData));
    localStorage.setItem("date", JSON.stringify(curDay));
  }, [carouselData]);

  // USEFFECT TRIGGERD AFTER EVERYTIME OUR SEARCH STATE CHANGES, THIS WAY HAVING ALL THE POKEMONS IF OUR SEARCHVALUE IS EMPTY OR LOOK FOR A SPECIFIC ONE.
  useEffect(() => {
    fetchPokemon(`${API_ENDPOINT}${search || limit}`);
  }, [search]);

  // RETURN NEEDED STATES SO WE CAN USE THEM FURTHER IN OUR APPLICATION TO RENDER EVERY PIECE OF FUNCTIONALITY AND THE NECESSARY INFO. THANKS TO THE CONTEXT PROVIDER WE CAN HAVE ACCESS IN OUR WHOLE APPLICATION TO THESE STATES.
  return (
    <PokemonContext.Provider
      value={{
        isLoading,
        error,
        data,
        setSearch,
        setError,
        colorTypes,
        carouselData,
        setLightMode,
        lightMode,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
