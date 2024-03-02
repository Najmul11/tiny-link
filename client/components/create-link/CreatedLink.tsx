"use client";
import { CheckSquare2, Copy } from "lucide-react";
import { useState } from "react";

const CreatedLink = ({ shortLink }: { shortLink: string }) => {
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
        <p>
          {process.env.NEXT_PUBLIC_BASE_URL_FRONTEND}/{shortLink}
        </p>

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
    </>
  );
};

export default CreatedLink;
