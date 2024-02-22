import { Copy } from "lucide-react";
import React from "react";
import { ShortLinkSkeleton } from "./LinkSkeleton";
import { DatePicker } from "../ui/DatePicker";

const CreatedLink = () => {
  return (
    <>
      <div className="flex gap-10 items-center justify-center">
        <p>https://nano-link.vercel.app/JOfe</p>

        <button className="p-2 hover:bg-slate-700 duration-300 rounded-md">
          <Copy size={18} />
        </button>
      </div>
      <div className="w-72 mx-auto">
        <ShortLinkSkeleton />
        <DatePicker />
      </div>
    </>
  );
};

export default CreatedLink;
