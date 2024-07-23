import * as React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

type Film = {
  episode_id: number;
  title: string;
};

const films: Film[] = [
  { episode_id: 1, title: "Film 1" },
  { episode_id: 2, title: "Film 2" },
  { episode_id: 3, title: "Film 3" },
  { episode_id: 4, title: "Film 4" },
  { episode_id: 5, title: "Film 5" },
  { episode_id: 6, title: "Film 6" },
];

export function CardSlider() {
  const [films, setFilms] = useState<any>([]);

  async function getFilms() {
    const res = await fetch("https://swapi.dev/api/films");
    const data = await res.json();
    setFilms(data.results);
    console.log(films);
  }
  useEffect(() => {
    getFilms();
  });

  return (
    <div className="">
      <Carousel className="mb-10">
        <h1 className="text-white sm:hidden">Category 2</h1>
        <CarouselContent>
          {films.map((film: Film, index: number) => (
            <CarouselItem
              key={film.episode_id}
              className="w-full basis-1/2 md:basis-1/3"
            >
              <div className="relative">
                <Image
                  src="/images/image_5.jpg"
                  alt={film.title}
                  width={600}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041836] via-[transparent] to-[transparent]" />
                <div className="absolute inset-0 flex sm:flex-row place-items-end p-5 gap-3">
                  <h1 className="text-white text-sm lg:text-xl">
                    {film?.title}
                  </h1>
                  <h1 className="bg-[#FFB400] items-center rounded-md p-1 mt-2 text-xs lg:text-base md:hidden">
                    Exclusive
                  </h1>
                  <span className="hidden md:block">
                    {index === 0 && (
                      <h1 className="bg-[#FFB400] items-center rounded-md p-1 mt-2 text-xs lg:text-base">
                        Exclusive
                      </h1>
                    )}
                  </span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>

      <Carousel className="mb-10">
        <h1 className="text-white sm:hidden">Category 2</h1>
        <CarouselContent>
          {films.map((film: Film, index: number) => (
            <CarouselItem
              key={film.episode_id}
              className="w-full basis-1/2 md:basis-1/3"
            >
              <div className="relative">
                <Image
                  src="/images/image_2.jpg"
                  alt={film.title}
                  width={600}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041836] via-[transparent] to-[transparent]" />
                <div className="absolute inset-0 flex sm:flex-row place-items-end p-5 gap-3">
                  <h1 className="text-white text-sm lg:text-xl">
                    {film?.title}
                  </h1>
                  <h1 className="bg-[#FFB400] items-center rounded-md p-1 mt-2 text-xs lg:text-base md:hidden">
                    Exclusive
                  </h1>
                  <span className="hidden">
                    {index === 0 && (
                      <h1 className="bg-[#FFB400] items-center rounded-md p-1 mt-2 text-xs lg:text-base">
                        Exclusive
                      </h1>
                    )}
                  </span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}
