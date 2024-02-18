import { Button } from "../ui/button";

const CreateLink = () => {
  return (
    <div className="">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Enter long link here"
          className="py-2 px-3 w-full rounded-l-md focus:outline-none bg-slate-800 "
        />
        <Button
          variant="outline"
          className="text-black px-10 rounded-r rounded-l-none"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default CreateLink;
