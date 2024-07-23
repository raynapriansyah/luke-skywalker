"use client";

import Hero from "../hero";
import { CardSlider } from "../card-slider";
import Footer from "../footer";

export default function Home() {
  return (
    <div className="bg-[#041836]">
      <Hero />
      <div className=" md:p-20 xl:p-52">
        <CardSlider />
      </div>
      <Footer />
    </div>
  );
}
