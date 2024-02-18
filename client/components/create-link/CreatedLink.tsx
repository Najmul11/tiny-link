import { Copy } from "lucide-react";
import React from "react";

const CreatedLink = () => {
  return (
    <div className="flex gap-10 items-center justify-center">
      <p>https://nano-link.vercel.app/JOfe</p>

      <button>
        <Copy />
      </button>
    </div>
  );
};

export default CreatedLink;
