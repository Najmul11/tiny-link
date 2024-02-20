import React from "react";
import LinkSkeleton from "./LinkSkeleton";
import SingleLink from "./SingleLink";

const AllLinks = () => {
  const links = [
    {
      shortLink: "https://nano-link.vercel.app/JOfe",
    },
    {
      shortLink: "https://nano-link.vercel.app/JOfe",
    },
    {
      shortLink: "https://nano-link.vercel.app/JOfe",
    },
  ];
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-2xl text-center  font-semibold">All links</h2>

      <LinkSkeleton />
      <div className="p-5 rounded-md bg-slate-900 ">
        <p className="font-bold text-md text-center text-white/80">
          You haven&apos;t created any tiny link yet 🫥
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {links.map((link, i) => (
          <SingleLink key={i} link={link} />
        ))}
      </div>
    </div>
  );
};

export default AllLinks;
