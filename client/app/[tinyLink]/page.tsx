"use client";

import { useRedirectToOriginalLinkQuery } from "@/redux/api/apiSlice";
import { Loader2Icon } from "lucide-react";
import { redirect, useParams } from "next/navigation";

const Page = () => {
  const params = useParams();
  const { data, isLoading, isError, error } = useRedirectToOriginalLinkQuery(
    params?.tinyLink
  );

  if (data?.data) {
    redirect(data.data);
  }

  return (
    <div>
      {isLoading && (
        <div className="flex justify-center items-center  h-screen ">
          <Loader2Icon className="animate-spin" size={30} />
        </div>
      )}

      {isError && (
        <div className="flex justify-center items-center  h-screen ">
          <span className="font-semibold bg-white/90 text-black rounded-md  py-6 px-10">
            The link is <span className="text-red-500">broken</span>🫥🫥🫥
          </span>
        </div>
      )}
    </div>
  );
};

export default Page;
