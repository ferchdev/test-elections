import Swal from "sweetalert2";

export const validateFormData = (values, setShowTable) => {
  const showConfirmAlert = () => {
    Swal.fire({
      title: "Data saved",
      html: `<p>The data has been uploaded successfully.</p>`,
      icon: "success",
      confirmButtonText: "View table",
    }).then((response) => {
      if (response.isConfirmed) setShowTable(true);
    });
  };

  const showUpdateAlert = () => {
    Swal.fire({
      title: "The data has been updated.",
      html: `<p>The data has been successfully updated, you can continue uploading data.</p>`,
      icon: "success",
      iconColor: "blue",
      confirmButtonText: "View table",
      confirmButtonColor: "blue",
    }).then((response) => {
      if (response.isConfirmed) setShowTable(true);
    });
  };

  const showRepeatAlert = () => {
    Swal.fire({
      title: "The entered data is repeated.",
      html: `<p>The data you have entered is already saved.</p>`,
      icon: "warning",
      iconColor: "yellow",
      confirmButtonText: "Try again",
      confirmButtonColor: "yellow",
    })
  };
  const localItem = JSON.parse(localStorage.getItem("data_elections")) || [""];
  const isRepeatData = localItem.some(
    (res) =>
      res.year === values.year &&
      res.county === values.county &&
      res.politicalParty === values.politicalParty &&
      res.voteCount === values.voteCount
  );

  const isDataExist = localItem.some(
    (res) =>
      res.year === values.year &&
      res.county === values.county &&
      res.politicalParty === values.politicalParty
  );
  if(isRepeatData) return showRepeatAlert();
  if (isDataExist) {
    localItem.map((res, i) => {
      if (
        res.year === values.year &&
        res.county === values.county &&
        res.politicalParty === values.politicalParty
      ) {
        localItem[i] = {
          year: values.year,
          politicalParty: values.politicalParty,
          county: values.county,
          voteCount: values.voteCount,
        };
        localStorage.setItem("data_elections", JSON.stringify(localItem));
      }
    });
    showUpdateAlert();
  } else {
    localStorage.getItem("data_elections") !== null
      ? window.localStorage.setItem(
          "data_elections",
          JSON.stringify([
            ...JSON.parse(window.localStorage.getItem("data_elections")),
            values,
          ])
        )
      : window.localStorage.setItem("data_elections", JSON.stringify([values]));
    showConfirmAlert();
  }
};
