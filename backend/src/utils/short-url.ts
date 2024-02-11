const shortUrl = (shortUrl: string) => {
  const uniquePart = Number(shortUrl.toLowerCase().split('-')[2]) + 1;
  const shortURL = `short-url-${uniquePart}`;

  return shortURL;
};

export const shortUrlHelper = shortUrl;
