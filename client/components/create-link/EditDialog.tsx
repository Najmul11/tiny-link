"use client";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { DatePicker } from "../ui/DatePicker";
import { Button } from "../ui/button";
import { useState } from "react";
import { toast } from "../ui/use-toast";
import { useCustomizeLinkMutation } from "@/redux/api/apiSlice";
import { Loader2Icon } from "lucide-react";
import { TDialog } from "@/types/dialog";

const EditDialog = ({ tinyLink, id, open, setOpen }: TDialog) => {
  const [date, setDate] = useState<Date>();
  const [customLink, setCustomLink] = useState<string>(tinyLink ?? "");

  const [customizeLink, { isLoading }] = useCustomizeLinkMutation();

  const handleSave = async () => {
    if (!date && !customLink) {
      return toast({
        variant: "destructive",
        description: "Failed🫥🫥🫥,both field can't be empty.",
      });
    }
    if (customLink.length > 80) {
      return toast({
        variant: "destructive",
        description: "Failed🫥🫥🫥,tiny link is so long.",
      });
    }

    const res = (await customizeLink({
      id,
      data: { shortLink: customLink, expiryDate: date },
    })) as any;

    if (res.data) {
      setOpen(false);
      return toast({
        description: (
          <span>
            Yay! Your custom link is{" "}
            <span className="text-green-500">ready</span>🚀🚀🚀
          </span>
        ),
      });
    }
    if (res.error) {
      return toast({
        variant: "destructive",
        description: res.error.data.message,
      });
    }
  };

  return (
    <DialogContent className="bg-transparent border-0 bg-white">
      <DialogHeader className=" ">
        <DialogTitle>Customize short link</DialogTitle>
        <DialogDescription className="flex flex-col gap-5 !mt-3">
          <div className="flex flex-col gap-2">
            <label htmlFor="">Custom link</label>
            <input
              placeholder="type only Tiny part of link"
              value={customLink ? customLink : tinyLink}
              onChange={(e) => setCustomLink(e.target.value)}
              type="text "
              className="border focus:outline-none py-2 px-3 text-black rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Set expiry date</label>
            <DatePicker date={date} setDate={setDate} />
          </div>
          <div className="flex justify-between items-center">
            <DialogClose>
              <Button
                variant={"ghost"}
                className="hover:bg-red-200 text-red-500"
              >
                cancel
              </Button>
            </DialogClose>

            {isLoading ? (
              <Button variant="outline" className="text-black w-20">
                <Loader2Icon className="animate-spin " size={20} />
              </Button>
            ) : (
              <Button
                onClick={handleSave}
                variant="outline"
                className="text-black w-20"
              >
                Save
              </Button>
            )}
          </div>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
};

export default EditDialog;
