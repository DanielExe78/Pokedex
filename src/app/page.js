"use client";
import Image from "next/image";
import Pokemons from "../../components/Pokemons";
import useFetch from "../../hooks/useFetch";
import logo from "../../public/nav_logo.png";

export default function Home() {
  const { isLoading, error } = useFetch();

  if (error.show) {
    return (
      <div className="flex text-center justify-center">
        <h1>{error.msg}</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex justify-center pt-64">
        <Image src={logo} className="animate-spin" alt="pokeball preloader" />
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      <h1 className="text-white mb-1.5">Dex</h1>
      <section className="grid grid-cols-2 gap-1.5">
        <Pokemons />
      </section>
    </main>
  );
}
