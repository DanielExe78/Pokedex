"use client";
import React, { useEffect, useState } from "react";

const API_ENDPOINT = `https://pokeapi.co/api/v2/pokemon/?limit=150`;

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ msg: "", show: false });
  const [data, setData] = useState([]);

  const fetchPokemon = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      const promises = data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();

        return data;
      });
      const results = await Promise.all(promises);
      setData(results);
      setIsLoading(false);
      setError({ msg: "", show: false });
    } catch (error) {
      setError({
        msg: "The page you are trying to reach was not found...",
        show: true,
      });
    }
  };

  useEffect(() => {
    fetchPokemon(`${API_ENDPOINT}`);
  }, []);

  return { isLoading, data, error };
};

export default useFetch;
