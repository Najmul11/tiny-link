import { shortUrlHelper } from '../../../utils/short-url';
import { TLink } from './links.interface';
import { Link } from './links.model';

const createLink = async (payload: TLink, user: string) => {
  const { originalURL } = payload;

  const lastShort = await Link.findOne().sort({ createdAt: -1 });

  const shortURL = shortUrlHelper(lastShort?.shortURL ?? 'short-url-1');

  const result = await Link.create({
    originalURL,
    shortURL,
    user,
  });

  return result;
};

const deleteURL = async (id: string) => {
  const result = await Link.findByIdAndDelete(id);
  return result;
};

// get user specific urls
const userURLs = async (userId: string) => {
  const result = await Link.find({ user: userId }).sort({ createdAt: -1 });
  return result;
};

export const LinkService = {
  createLink,
  deleteURL,
  userURLs,
};
