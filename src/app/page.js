import Image from "next/image";
import Pokemons from "../../components/Pokemons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-white mb-1.5">Dex</h1>
      <section className="flex flex-row gap-1.5">
        <Pokemons />
      </section>
    </main>
  );
}
