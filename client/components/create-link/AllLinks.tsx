"use client";
import { useGetUserProfileQuery } from "@/redux/api/apiSlice";
import LinkSkeleton from "./LinkSkeleton";
import SingleLink from "./SingleLink";
import { useSession } from "next-auth/react";
import { TLink } from "@/types/link";

const AllLinks = () => {
  const { data: session } = useSession();

  const { data: user, isLoading } = useGetUserProfileQuery(
    session?.user?.email
  );

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-2xl text-center bg-slate-900 py-[6px] rounded-md  font-semibold">
        All links
      </h2>

      {isLoading ? (
        <LinkSkeleton />
      ) : (
        <>
          {user?.data?.links.length > 0 ? (
            <div className="flex flex-col gap-3">
              {user?.data?.links.map((link: TLink) => (
                <SingleLink key={link.id} link={link} />
              ))}
            </div>
          ) : (
            <div className="p-5 rounded-md bg-slate-900 ">
              <p className="font-bold text-md text-center text-white/80">
                You haven&apos;t created any tiny link yet 🫥
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AllLinks;
