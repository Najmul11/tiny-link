"use client";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

const AuthDialog = () => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Login to create Tiny Link🚀</DialogTitle>
        <DialogDescription className="flex flex-col gap-5 !mt-10">
          <button
            className="flex items-center gap-5 bg-slate-800 hover:bg-slate-900 duration-300 text-white py-2 justify-center rounded"
            onClick={() => signIn("google")}
          >
            <FcGoogle size={28} />
            Login with Google
          </button>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
};

export default AuthDialog;
