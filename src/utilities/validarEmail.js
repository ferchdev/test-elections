export const validarEmail = (email) => {
  const myRe = /^[^\s@]+@[^\s@]+\.([^\s@]+){2,10}$/.test(email);
  return myRe;
};
