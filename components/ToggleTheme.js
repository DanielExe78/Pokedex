"use client";
import React from "react";
import { useGlobalContext } from "../context/Context";

const ToggleTheme = () => {
  const { setLightMode, lightMode } = useGlobalContext();

  return (
    <button onClick={() => setLightMode(!lightMode)}>
      {lightMode ? "light mode" : "dark mode"}
    </button>
  );
};

export default ToggleTheme;
