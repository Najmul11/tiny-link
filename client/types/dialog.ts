import { Dispatch, SetStateAction } from "react";

export type TDialog = {
  tinyLink: string;
  id: number;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  maxClicks: any;
};
