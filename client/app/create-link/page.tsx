import AllLinks from "@/components/create-link/AllLinks";
import CreateLink from "@/components/create-link/CreateLink";
import CreatedLink from "@/components/create-link/CreatedLink";

const CreateLinkPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-[10vh]">
      <div className="grid grid-cols-5 gap-5">
        <div className="col-span-3 flex flex-col gap-10">
          <CreateLink />
          <CreatedLink />
        </div>

        <div className="col-span-2">
          <AllLinks />
        </div>
      </div>
    </div>
  );
};

export default CreateLinkPage;
