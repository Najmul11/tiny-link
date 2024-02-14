import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Avatar } from "./Avatar";

const Header = () => {
  const user = false;
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex justify-between py-3">
        {/* left */}
        <div className="flex gap-10 items-center">
          <Link href={"/"} className="font-bold text-2xl">
            TINY LINK
          </Link>
          <Link href={"/features"} className="text-[14px] font-semibold">
            Features
          </Link>
        </div>

        {/* right */}
        <div>
          {user ? (
            <Avatar />
          ) : (
            <Button variant="outline">Login with Email</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
