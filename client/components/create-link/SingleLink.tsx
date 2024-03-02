"use client";
import { CheckSquare2, Copy, Loader2Icon, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { Dialog, DialogTrigger } from "../ui/dialog";
import EditDialog from "./EditDialog";
import { useState } from "react";
import { TLink } from "@/types/link";
import { format } from "date-fns";

type TProps = {
  link: TLink;
  handleDeleteLink: (id: number) => void;
  deleteLinkLoading: { [key: number]: boolean };
};

const SingleLink = ({ link, handleDeleteLink, deleteLinkLoading }: TProps) => {
  const { clicks, shortLink, id, expiryDate } = link;
  const [showCheckmark, setShowCheckmark] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (!showCheckmark) {
      setShowCheckmark(true);
      setTimeout(() => {
        setShowCheckmark(false);
      }, 3000);
    }
  };
  return (
    <div className="bg-slate-900 p-5 rounded-md flex flex-col gap-2">
      <div className="flex gap-5 justify-between items-center">
        <Link href={"/"} className="w-[]">
          {shortLink}
        </Link>

        {showCheckmark ? (
          <button className="hover:bg-slate-800 p-2 duration-300 rounded-md">
            <CheckSquare2 size={18} />
          </button>
        ) : (
          <button
            onClick={handleClick}
            className="hover:bg-slate-800 p-2 duration-300 rounded-md"
          >
            <Copy size={18} />
          </button>
        )}
      </div>
      <p className="text-sm text-white/80">Clicks: {clicks}</p>

      <div className="flex items-center justify-between">
        <span className="text-white/80 text-sm">
          Exp: {expiryDate ? format(expiryDate, "PPP") : ""}
        </span>

        <div className="flex items-center gap-2">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <button className="p-2  hover:bg-slate-700 duration-300 rounded-md">
                <Pencil size={18} />
              </button>
            </DialogTrigger>
            <EditDialog
              tinyLink={shortLink}
              id={id}
              open={open}
              setOpen={setOpen}
            />
          </Dialog>

          {deleteLinkLoading[`${id}`] ? (
            <div className="p-2 bg-slate-800 hover:bg-slate-700 duration-300 rounded-md">
              <Loader2Icon className="animate-spin" size={18} />
            </div>
          ) : (
            <button
              onClick={() => handleDeleteLink(id)}
              className="p-2 bg-slate-800 hover:bg-slate-700 duration-300 rounded-md"
            >
              <Trash2
                size={18}
                className="text-red-500 hover:text-red-600 duration-300"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleLink;
