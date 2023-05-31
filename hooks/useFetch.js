"use client";
import React, { useEffect, useState } from "react";

const API_ENDPOINT = "https://pokeapi.co/api/v2/pokemon/charmander";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ msg: "", show: false });
  const [data, setData] = useState([]);

  const fetchPokemon = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      setData(data);
      setIsLoading(false);
    } catch (error) {
      setError({ msg: error.message, show: true });
    }
  };

  useEffect(() => {
    fetchPokemon(`${API_ENDPOINT}`);
  }, []);

  return { isLoading, data, error };
};

export default useFetch;
