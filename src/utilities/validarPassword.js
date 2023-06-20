export const validarPassword = (pass) => {
  const myRe =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/.test(
      pass
    );
  return myRe;
};
