import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DatePicker } from "../ui/DatePicker";
import { Button } from "../ui/button";

const EditDialog = () => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Customize short link</DialogTitle>
        <DialogDescription className="flex flex-col gap-5 !mt-3">
          <div className="flex flex-col gap-2">
            <label htmlFor="">Custom link</label>
            <input
              type="text "
              className="border focus:outline-none py-2 px-3 text-black rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Set expiry date</label>
            <DatePicker />
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
