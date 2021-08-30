export const isValidate = (str: string): boolean => {
  if (!str.length) return true;
  const acceptedValues = /^[0-9]*$/g;
  return str.match(acceptedValues) ? true : false;
};
