import Swal from "sweetalert2";

export const userRegister = (values, push) => {
  const showConfirmAlert = () => {
    Swal.fire({
      title: "User created successfully",
      html: `<p>The user <b>${values.firstName}</b> has been created successfully.</p>`,
      icon: "success",
      confirmButtonText: "Go to sign in",
    }).then((response) => {
      if (response.isConfirmed || !response.isConfirmed) {
        push("/");
      }
    });
  };

  const showErrorAlert = () => {
    Swal.fire({
      title: "The mail is already registered.",
      html: `<p>The email <b>${values.email}</b> has already been registered by another user.</p>`,
      icon: "error",
      confirmButtonText: "try another email",
      confirmButtonColor: "red",
    });
  };

  const localItem = JSON.parse(localStorage.getItem("accounts")) || [""];
  const isExistsEmail = localItem.some((res) => res.email === values.email);
  if (isExistsEmail) showErrorAlert();
  else {
    localStorage.getItem("accounts") !== null
      ? window.localStorage.setItem(
          "accounts",
          JSON.stringify([
            ...JSON.parse(window.localStorage.getItem("accounts")),
            values,
          ])
        )
      : window.localStorage.setItem("accounts", JSON.stringify([values]));
    showConfirmAlert();
  }
};
