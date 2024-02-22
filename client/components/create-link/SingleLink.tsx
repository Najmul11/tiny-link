import { Copy, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { Dialog, DialogTrigger } from "../ui/dialog";
import EditDialog from "./EditDialog";

type TProps = {
  link: {
    shortLink: string;
  };
};

const SingleLink = ({ link }: TProps) => {
  const { shortLink } = link;
  return (
    <div className="bg-slate-900 p-5 rounded-md flex flex-col gap-3">
      <div className="flex gap-5 justify-between items-center">
        <Link href={"/"} className="w-[]">
          {shortLink}
        </Link>
        <button className="hover:bg-slate-800 p-2 duration-300 rounded-md">
          <Copy size={18} />
        </button>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-white/80">Exp: 11 Jan,2024</span>

        <div className="flex items-center gap-2">
          <Dialog>
            <DialogTrigger>
              <button className="p-2  hover:bg-slate-700 duration-300 rounded-md">
                <Pencil size={18} />
              </button>
            </DialogTrigger>
            <EditDialog />
          </Dialog>

          <button className="p-2 bg-slate-800 hover:bg-slate-700 duration-300 rounded-md">
            <Trash2
              size={18}
              className="text-red-500 hover:text-red-600 duration-300"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleLink;
