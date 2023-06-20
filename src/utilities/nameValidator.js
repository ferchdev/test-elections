export const nameValidator = (name) => {
  const myRe = /^([A-Za-z]|[^0-9|°!"#$%&/()=?¡*¿+-;><,]){3,80}$/.test(name);
  const whiteSpaces = /(\s{2,})/g.test(name);
  return myRe && !whiteSpaces;
};
