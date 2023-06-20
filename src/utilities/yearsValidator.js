export const yearsValidator = (year) => {
  const myRe = /^(?:20(?:0[0-9]|1[0-9]|2[0-2])|2000|2023)$/.test(year);
  const whiteSpaces = /(\s)/g.test(year);
  return myRe && !whiteSpaces;
};
