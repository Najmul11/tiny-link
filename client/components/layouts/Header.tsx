"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { Avatar } from "./Avatar";
import { Dialog, DialogTrigger } from "../ui/dialog";
import AuthDialog from "../auth/AuthDialog";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useUserLoginMutation } from "@/redux/api/apiSlice";

const Header = () => {
  const { data: session } = useSession();

  const [userLogin] = useUserLoginMutation();

  useEffect(() => {
    const login = async () => {
      if (session) {
        const res = await userLogin({
          name: session.user?.name,
          email: session.user?.email,
        });
        return res;
      }
    };
    const response = login();
  }, [session, userLogin]);

  return (
    <div className="bg-black text-white">
      <div className="max-w-screen-xl mx-auto px-4 xl:px-[unset] py-6">
        <div className="flex justify-between ">
          {/* left */}
          <div className="flex gap-10 items-center">
            <Link href={"/"} className="font-bold text-2xl">
              TINY LINK
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
