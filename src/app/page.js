"use client";
import Image from "next/image";
import Pokemons from "../../components/Pokemons";
import logo from "../../public/nav_logo.png";
import { useGlobalContext } from "../../context/Context";
import ErrorSearch from "../../components/ErrorSearch";
import CarouselComponent from "../../components/Carousel";

export default function Home() {
  const { isLoading, error, data } = useGlobalContext();

  // ERROR PAGE
  if (error.show) {
    return (
      <div className="flex flex-col text-center justify-center pt-20">
        <ErrorSearch />
        <h1>{error.msg}</h1>
      </div>
    );
  }

  // LOADING PAGE
  if (isLoading) {
    return (
      <div className="flex justify-center pt-64">
        <Image src={logo} className="animate-spin" alt="pokeball preloader" />
      </div>
    );
  }

  // CARDS DISPLAY, IF OUR DATA LENGTH IS BIGGER THAN 1 WE'LL DISLAY OUR CAROUSEL, IF NOT THIS MEANS THAT WE'RE USING THE SEARCHFORM SO THE CAROUSEL WILL BE REMOVED AND SHOW THE ONLY POKEMON WE'RE LOOKING FOR
  return (
    <>
      {data.length > 1 && <CarouselComponent />}
      <main className="flex min-h-screen flex-col items-center pt-24">
        <h1 className="text-white mb-1.5">Dex</h1>
        <section
          className={`${
            data.length === 1 ? "grid gap-1.5" : "grid grid-cols-2 gap-1.5"
          }`}
        >
          <Pokemons />
        </section>
      </main>
    </>
  );
}
