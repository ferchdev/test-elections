import Swal from "sweetalert2";

export const loginValidator = (values, setIsLogin, push) => {
  const showErrorAlert = () => {
    Swal.fire({
      title: "Invalid email or password.",
      html: `<p>The account entered is incorrect.</p>`,
      icon: "error",
      confirmButtonText: "try again",
      confirmButtonColor: "red",
    });
  };

  const localItem = JSON.parse(localStorage.getItem("accounts")) || [""];
  const isExistsUser = localItem.some(
    (res) => res.email === values.email && res.password === values.password
  );
  if (isExistsUser) {
    setIsLogin(true);
    localStorage.setItem("active_session", values.check);
    push("/account");
  } else showErrorAlert();
};
