"use client";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DatePicker } from "../ui/DatePicker";
import { Button } from "../ui/button";
import { useState } from "react";

const EditDialog = ({ tinyLink }: { tinyLink: string }) => {
  const [date, setDate] = useState<Date>();

  const [customLink, setCustomLink] = useState<string>("");
  return (
    <DialogContent className="bg-transparent border-0 bg-white">
      <DialogHeader className=" ">
        <DialogTitle>Customize short link</DialogTitle>
        <DialogDescription className="flex flex-col gap-5 !mt-3">
          <div className="flex flex-col gap-2">
            <label htmlFor="">Custom link</label>
            <input
              placeholder="type only Tiny part of link"
              value={tinyLink}
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
            <Button variant={"ghost"} className="hover:bg-red-200 text-red-500">
              cancel
            </Button>

            <Button variant="outline" className="text-black">
              Save
            </Button>
          </div>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
};

export default EditDialog;
