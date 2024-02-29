export const isValidURL = (url: string): boolean => {
  // Regular expression for URL validation
  const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
  return urlPattern.test(url);
};
