export const onlyNumbersValidator = (number) => {
  const myRe = /^[0-9]{1,10}$/.test(number);
  const whiteSpaces = /(\s)/g.test(number);
  return myRe && !whiteSpaces;
};
