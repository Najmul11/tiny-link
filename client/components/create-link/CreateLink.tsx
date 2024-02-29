import { TSortLink } from "@/types/link";
import { Button } from "../ui/button";

const CreateLink = ({
  handleCreateLink,
  setOriginalLink,
  originalLink,
}: TSortLink) => {
  return (
    <div className="">
      <div className="flex items-center">
        <input
          type="text"
          value={originalLink}
          placeholder="Enter long link here"
          className="py-2 px-3 w-full rounded-l-md focus:outline-none bg-slate-800 "
          onChange={(e) => setOriginalLink(e.target.value)}
        />
        <Button
          variant="outline"
          onClick={handleCreateLink}
          className="text-black px-10 rounded-r rounded-l-none"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default CreateLink;
