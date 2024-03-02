import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import QRCode from "react-qr-code";

const QrDialog = ({ shortLink }: { shortLink: string }) => {
  return (
    <DialogContent className="bg-transparent border-0 bg-white w-72">
      <DialogHeader className="">
        <DialogTitle>Scan QR code</DialogTitle>
        <DialogDescription className="flex flex-col justify-center items-center gap-5 !mt-5 ">
          <QRCode
            size={100}
            style={{ height: "auto", maxWidth: "100%", width: "200px" }}
            value={`${process.env.NEXT_PUBLIC_BASE_URL_REDIRECT}/${shortLink}`}
            viewBox={`0 0 256 256`}
          />
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
};

export default QrDialog;
