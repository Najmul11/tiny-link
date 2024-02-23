import React from "react";
import { Button } from "../ui/moving-border";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-[50rem] w-full   bg-grid-gray-800 relative flex pt-[28vh] justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="flex flex-col  text-center items-center w-1/3 mx-auto">
        <span className="text-sm text-[#7CDBE9]/80 bg-[#294358]/60 px-5 py-1 rounded-full">
          No credit card required.
        </span>

        <p className="text-4xl sm:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500  text-center">
          More than just shorter links
        </p>
        <p className="text-sm mt-3 text-white/80">
          Shorten links using NanoLink super fast. NanoLink is a oneclick paste
          and copy URL shortener which alows you to shorten links lighting fast
        </p>
        <Link href={"/create-link"}>
          <Button
            borderRadius="0.5rem"
            duration={8000}
            containerClassName="h-12 w-72 mt-10 hover:scale-105 duration-300"
            className="   bg-slate-900 text-white/80 "
          >
            Start Shortening for free
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
