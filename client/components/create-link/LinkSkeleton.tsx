import { Skeleton } from "../ui/skeleton";

const LinkSkeleton = () => {
  return (
    <div className="flex flex-col space-y-3 bg-slate-900 p-5 rounded-md">
      <Skeleton className="h-5 bg-slate-700 rounded-md" />
      <div className="flex gap-2 items-center">
        <Skeleton className="h-5 w-[85%] bg-slate-700 rounded-md" />
        <Skeleton className="h-5 w-[15%] bg-slate-700 rounded-md" />
      </div>
    </div>
  );
};

export default LinkSkeleton;

export const ShortLinkSkeleton = () => {
  return (
    <div>
      <Skeleton className="h-5 bg-slate-700 rounded-md" />
    </div>
  );
};
