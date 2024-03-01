"use client";
import { useGetUserProfileQuery } from "@/redux/api/apiSlice";
import { Loader2Icon } from "lucide-react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { data: session } = useSession();

  const { isLoading } = useGetUserProfileQuery(session?.user?.email);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center  h-[calc(100vh-88px)] ">
        <Loader2Icon className="animate-spin" size={30} />
      </div>
    );
  }

  if (!session) {
    return redirect("/");
  }
  return children;
};

export default PrivateRoute;
