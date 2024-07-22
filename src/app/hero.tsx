"use client";

import Image from "next/image";
import HeroImage from "/public/images/image_7.jpg";
import { GoTriangleRight } from "react-icons/go";
import { useEffect, useState } from "react";
import { cn } from "~/lib/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Share2 } from "lucide-react";

export default function Hero() {
  const [film, setFilm] = useState<any>({});

  async function getFilm() {
    const res = await fetch("https://swapi.dev/api/films");
    const data = await res.json();
    setFilm(data.results[0]);
  }
  useEffect(() => {
    getFilm();
  }, []);

  return (
    <div className="">
      <div className="md:block relative w-full">
        <Image
          src={HeroImage}
          alt="HeroImage"
          className="h-screen md:w-full md:h-screen md:object-cover"
        />
        <div className="absolute inset-0 w-full bg-gradient-to-t md:bg-gradient-to-r from-[#01377F] via-[#01377F] to-[transparent]" />
        <div className="container flex flex-col absolute top-[500px] md:top-[350px] px-4 sm:px-10 text-white w-[90%] sm:w-[25%] text-left gap-4">
          <div className="text-3xl  md:text-5xl font-bold ">
            <h1>{film.title}</h1>
          </div>
          <h1 className="opacity-[66%] text-sm sm:text-base">
            {film.release_date} | 2H 23m
          </h1>
          <div>
            <h1 className="text-justify opacity-[66%] text-sm sm:text-base">
              {film.opening_crawl}
            </h1>
          </div>
          <div className="flex items-center gap-5">
            <button className="bg-[#FFB400] flex items-center rounded-3xl px-6 sm:px-9 py-2 text-black font-bold">
              <GoTriangleRight size={25} />
              Play
            </button>
            <button className="md:hidden bg-transparent border border-yellow-600 flex items-center rounded-3xl px-6 sm:px-9 py-2 text-black font-bold gap-2">
              <Share2 size={20} />
              Share
            </button>
          </div>
          <div className="container inline-flex gap-x-2 sm:gap-x-4 mt-20 sm:mt-36">
            {[1, 2, 3, 4].map((_, index) => (
              <div
                key={index}
                className={cn(
                  "w-2 h-2 sm:w-4 sm:h-4 rounded-full bg-white hidden md:block",
                  index === 1 && "bg-[#FFB400]"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
