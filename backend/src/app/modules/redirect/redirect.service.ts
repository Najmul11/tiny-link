import { Link } from '../links/links.model';

const redirectToOriginalLink = async (shortLink: string) => {
  const link = await Link.findOne({ shortLink });
  return link?.originalLink;
};

export const RedirectService = {
  redirectToOriginalLink,
};
