"use client";
import { Coffee } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Meteors } from "../ui/meteors";

const Footer = () => {
  return (
    <div className="relative overflow-hidden py-10 mt-[20vh]">
      <div className=" max-w-screen-xl mx-auto text-white/80 flex justify-between">
        <Link
          href={"https://buy-me-coffee-sigma.vercel.app/"}
          target="_blank"
          className="flex gap-2 items-center group"
        >
          <h1 className="text-sm">Buy me a coffee </h1>

          <p className="  text-yellow-500 text-4xl flex justify-center items-center group-hover:scale-110 duration-300 ">
            <Coffee />
          </p>
        </Link>

        <p className="text-sm">© 2024. All Rights Reserved.</p>
      </div>
      <Meteors number={20} />
    </div>
  );
};

export default Footer;
