"use client";
import { CheckSquare2, Copy } from "lucide-react";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import QRCode from "react-qr-code";

const CreatedLink = ({ shortLink }: { shortLink: string }) => {
  const [showCheckmark, setShowCheckmark] = useState(false);

  const handleClick = () => {
    if (!showCheckmark) {
      setShowCheckmark(true);
      setTimeout(() => {
        setShowCheckmark(false);
      }, 3000);
    }
  };
  return (
    <>
      <div className="flex gap-10 items-center justify-center">
        <p>
          {process.env.NEXT_PUBLIC_BASE_URL_REDIRECT}/{shortLink}
        </p>

        {showCheckmark ? (
          <button className="hover:bg-slate-800 p-2 duration-300 rounded-md">
            <CheckSquare2 size={18} />
          </button>
        ) : (
          <CopyToClipboard
            text={`${process.env.NEXT_PUBLIC_BASE_URL_REDIRECT}/${shortLink}`}
            onCopy={handleClick}
          >
            <button className="hover:bg-slate-800 p-2 duration-300 rounded-md">
              <Copy size={18} />
            </button>
          </CopyToClipboard>
        )}
      </div>
      <div className="flex justify-center">
        <div className="p-5 bg-white  flex justify-center rounded-md">
          <QRCode
            size={100}
            style={{ height: "auto", maxWidth: "100%", width: "200px" }}
            value={`${process.env.NEXT_PUBLIC_BASE_URL_REDIRECT}/${shortLink}`}
            viewBox={`0 0 256 256`}
          />
        </div>
      </div>
    </>
  );
};

export default CreatedLink;
