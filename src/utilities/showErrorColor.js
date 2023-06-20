import { nameValidator } from "./nameValidator";
import { onlyNumbersValidator } from "./onlyNumbersValidator";
import { validarEmail } from "./validarEmail";
import { validarPassword } from "./validarPassword";
import { yearsValidator } from "./yearsValidator";

export const showErrorColor = (event) => {
  const element = document.getElementById(`${event.target.id}`);
  const name = event.target.name;
  const value = event.target.value;
  const setError = () => element.classList.add("error");
  const removeError = () => element.classList.remove("error");
  if (name === "email") {
    !validarEmail(value)
      ? setError()
      : removeError()
  } else if (name === "firstName" || name === "lastName") {
    !nameValidator(value)
      ? setError()
      : removeError()
  } else if (name === "voteCount") {
    !onlyNumbersValidator(value)
      ? setError()
      : removeError()
  } else if (name === "year") {
    !yearsValidator(value)
      ? setError()
      : removeError()
  } else if (name === "password") {
    !validarPassword(value)
      ? setError()
      : removeError()
  }
};
