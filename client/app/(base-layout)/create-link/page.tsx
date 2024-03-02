"use client";
import AllLinks from "@/components/create-link/AllLinks";
import CreateLink from "@/components/create-link/CreateLink";
import CreatedLink from "@/components/create-link/CreatedLink";
import { ShortLinkSkeleton } from "@/components/create-link/LinkSkeleton";
import { useToast } from "@/components/ui/use-toast";
import { isValidURL } from "@/lib/isValid-url";
import { useCreateLinkMutation } from "@/redux/api/apiSlice";
import { useSession } from "next-auth/react";
import { useState } from "react";

const CreateLinkPage = () => {
  const [originalLink, setOriginalLink] = useState<string>("");
  const [shortLink, setShortLink] = useState<string>("");
  const { toast } = useToast();

  const { data: session } = useSession();

  const [createLink, { isLoading }] = useCreateLinkMutation();

  const handleCreateLink = async () => {
    if (!isValidURL(originalLink)) {
      toast({
        variant: "destructive",
        description: "Invalid URL🫥🫥🫥",
      });
      return;
    }
    const res = (await createLink({
      originalLink,
      email: session?.user?.email,
    })) as any;

    if (res?.data?.success) {
      toast({
        description: (
          <span>
            Yay🎯Tiny Link is <span className="text-green-500">ready</span>
          </span>
        ),
      });

      setShortLink(res.data?.data?.shortLink);

      setOriginalLink("");
    } else {
      toast({
        variant: "destructive",
        description: "Failed🫥🫥🫥",
      });
    }
  };

  return (
    <div className="max-w-screen-xl px-4 xl:px-[unset] mx-auto mt-[10vh]">
      <div className="grid grid-cols-5 gap-5">
        <div className="col-span-5 lg:col-span-3 flex flex-col gap-10">
          <CreateLink
            originalLink={originalLink}
            handleCreateLink={handleCreateLink}
            setOriginalLink={setOriginalLink}
          />

          {isLoading ? (
            <div className="w-72 mx-auto">
              <ShortLinkSkeleton />
            </div>
          ) : (
            <>{shortLink && <CreatedLink shortLink={shortLink} />}</>
          )}
        </div>

        <div className="col-span-5 lg:col-span-2">
          <AllLinks />
        </div>
      </div>
    </div>
  );
};

export default CreateLinkPage;
