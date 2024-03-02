export type TLink = {
  id: number;
  originalLink: string;
  shortLink: string;
  clicks: number;
  expiryDate: Date;
};

export type TSortLink = {
  handleCreateLink: () => void;
  setOriginalLink: (link: string) => void;
  originalLink: string;
};
