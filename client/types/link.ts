export type TLink = {
  id: number;
  originalLink: string;
  shortLink: string;
  clicks: number;
  expiryDate: Date;
  maxClicks: number | null | undefined | string;
};

export type TSortLink = {
  handleCreateLink: () => void;
  setOriginalLink: (link: string) => void;
  originalLink: string;
};
