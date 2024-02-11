import { shortUrlHelper } from '../../../utils/short-url';
import { TLink } from './links.interface';
import { Link } from './links.model';

const createLink = async (payload: TLink, user: string) => {
  const { originalLink } = payload;

  const lastLink = await Link.findOne().sort({ createdAt: -1 });

  const shortURL = shortUrlHelper(lastLink?.shortLink ?? 'short-url-1');

  const result = await Link.create({
    originalLink,
    shortURL,
    user,
  });

  return result;
};

const deleteLink = async (id: string) => {
  const result = await Link.findByIdAndDelete(id);
  return result;
};

// get user specific urls
const userLinks = async (userId: string) => {
  const result = await Link.find({ user: userId }).sort({ createdAt: -1 });
  return result;
};

export const LinkService = {
  createLink,
  deleteLink,
  userLinks,
};
