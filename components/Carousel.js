"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGlobalContext } from "../context/Context";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper";

export default () => {
  const { colorTypes, carouselData } = useGlobalContext();

  return (
    <>
      <h1 className="flex justify-center mt-16 text-xl">
        Daily Pokemon Carousel
      </h1>
      <Swiper
        slidesPerView={2.3}
        spaceBetween={7}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mt-10"
      >
        {carouselData.slice(0, 5).map((pokemon) => {
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
            <SwiperSlide key={id}>
              <article className="bg-[#FEEFDD] w-40 h-56 rounded-lg flex flex-col justify-center items-center animate-zoom-in">
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
                        className={`${
                          colorTypes[pokemonTypes[0]]
                        } rounded-lg p-1`}
                      >
                        {pokemonTypes[0]}
                      </p>
                      <p
                        className={`${
                          colorTypes[pokemonTypes[1]]
                        } rounded-lg p-1`}
                      >
                        {pokemonTypes[1]}
                      </p>
                    </div>
                  ) : (
                    <p
                      className={`${
                        colorTypes[pokemonTypes[0]]
                      } rounded-lg p-1`}
                    >
                      {pokemonTypes[0]}
                    </p>
                  )}
                </section>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
