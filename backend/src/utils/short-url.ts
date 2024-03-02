import { prisma } from '../app';

const generateTinyLink = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let randomString = '';

  for (let i = 0; i < 6; i++) {
    randomString += characters.charAt(
      Math.floor(Math.random() * characters.length),
    );
  }
  return randomString;
};

export const generateUniqueShortLink = async (): Promise<string> => {
  const shortLink = generateTinyLink();
  const existingLink = await prisma.link.findUnique({
    where: { shortLink },
  });
  if (existingLink) {
    return generateUniqueShortLink();
  } else {
    return shortLink;
  }
};
