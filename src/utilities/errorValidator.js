import { nameValidator } from "./nameValidator";
import { onlyNumbersValidator } from "./onlyNumbersValidator";
import { validarEmail } from "./validarEmail";
import { validarPassword } from "./validarPassword";
import { yearsValidator } from "./yearsValidator";

export const errorValidator = (event, objectClone, setObjectClone) => {
  if (!event) return event;
  const name = event.target.name;
  const value = event.target.value;
  const setFalse = () => setObjectClone({ ...objectClone, [name]: false });
  const setTrue = () => setObjectClone({ ...objectClone, [name]: true });
  if (name === "email") {
    !validarEmail(value)
      ? setFalse()
      : setTrue()
  } else if (name === "firstName" || name === "lastName") {
    !nameValidator(value)
      ? setFalse()
      : setTrue()
  } else if (name === "voteCount") {
    !onlyNumbersValidator(value)
      ? setFalse()
      : setTrue()
  } else if (name === "year") {
    !yearsValidator(value)
      ? setFalse()
      : setTrue()
  } else if (name === "password") {
    !validarPassword(value)
      ? setFalse()
      : setTrue()
  } else {
    setObjectClone({ ...objectClone, [name]: value });
  }
};
