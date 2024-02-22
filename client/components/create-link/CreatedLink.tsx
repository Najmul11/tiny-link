"use client";
import { CheckSquare2, Copy } from "lucide-react";
import React, { useState } from "react";
import { ShortLinkSkeleton } from "./LinkSkeleton";

const CreatedLink = () => {
  const [showCheckmark, setShowCheckmark] = useState(false);

  const handleClick = () => {
    if (!showCheckmark) {
      setShowCheckmark(true);
      setTimeout(() => {
        setShowCheckmark(false);
      }, 3000);
    }
  };
  return (
    <>
      <div className="flex gap-10 items-center justify-center">
        <p>https://nano-link.vercel.app/JOfe</p>

        {showCheckmark ? (
          <button className="hover:bg-slate-800 p-2 duration-300 rounded-md">
            <CheckSquare2 size={18} />
          </button>
        ) : (
          <button
            onClick={handleClick}
            className="hover:bg-slate-800 p-2 duration-300 rounded-md"
          >
            <Copy size={18} />
          </button>
        )}
      </div>
      <div className="w-72 mx-auto">
        <ShortLinkSkeleton />
      </div>
    </>
  );
};

export default CreatedLink;
