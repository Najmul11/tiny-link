import { Copy, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

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
        <span>Exp: 11 Jan,2024</span>

        <div className="flex items-center gap-5">
          <button>
            <Pencil size={18} />
          </button>

          <button>
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
