import { Link } from '../links/links.model';

const redirectToOriginalLink = async (shortLink: string) => {
  const URL = await Link.findOne({ shortLink });
};

export const RedirectService = {
  redirectToOriginalLink,
};
