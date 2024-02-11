/* eslint-disable no-console */
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

export const LinkService = {
  createLink,
};
