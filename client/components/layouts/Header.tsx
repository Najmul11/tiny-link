"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { Avatar } from "./Avatar";
import { Dialog, DialogTrigger } from "../ui/dialog";
import AuthDialog from "../auth/AuthDialog";

import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div className="bg-black text-white">
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
            {session?.user ? (
              <Avatar />
            ) : (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="text-black">
                    Login
                  </Button>
                </DialogTrigger>
                <AuthDialog />
              </Dialog>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
