"use client";
import {
  useDeleteLinkMutation,
  useGetUserProfileQuery,
} from "@/redux/api/apiSlice";
import LinkSkeleton from "./LinkSkeleton";
import SingleLink from "./SingleLink";
import { useSession } from "next-auth/react";
import { TLink } from "@/types/link";
import { useState } from "react";
import { useToast } from "../ui/use-toast";

type TLoad = {
  id: boolean;
};

const AllLinks = () => {
  const { data: session } = useSession();
  const { toast } = useToast();

  const { data: user, isLoading } = useGetUserProfileQuery(
    session?.user?.email
  );

  const [deleteLinkMap, setDeleteLinkMap] = useState<{
    [key: number]: boolean;
  }>({});

  const [deleteLink, { isLoading: deleteLinkLoading }] =
    useDeleteLinkMutation();

  const handleDeleteLink = async (id: number) => {
    setDeleteLinkMap({ [id]: true });

    const res = (await deleteLink(id)) as any;

    setDeleteLinkMap({ [id]: deleteLinkLoading });

    if (res?.data?.success) {
      toast({
        description: (
          <span>
            Tiny Link is <span className="text-red-500">deleted.</span>
          </span>
        ),
      });
    } else {
      toast({
        variant: "destructive",
        description: "Failed🫥🫥🫥",
      });
    }
  };

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
                <SingleLink
                  deleteLinkLoading={deleteLinkMap}
                  handleDeleteLink={handleDeleteLink}
                  key={link.id}
                  link={link}
                />
              ))}
            </div>
          ) : (
            <>
              {session ? (
                <div className="p-5 rounded-md bg-slate-900 ">
                  <p className="font-bold text-md text-center text-white/80">
                    You haven&apos;t created any tiny link yet 🫥
                  </p>
                </div>
              ) : (
                <div className="p-5 rounded-md bg-slate-900 ">
                  <p className="font-bold text-md text-center text-white/80">
                    Login to see your created links 🫥
                  </p>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default AllLinks;
