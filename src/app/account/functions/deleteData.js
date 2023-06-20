import Swal from "sweetalert2";

export const deleteData = (index, data, setData) => {
  Swal.fire({
    title: "Do you want to delete this data?",
    html: `<p>If you delete this data, you will no longer be able to recover it.</p>`,
    icon: "warning",
    iconColor: "yellow",
    confirmButtonText: "Ok",
    confirmButtonColor: "green",
    showDenyButton: true,
    denyButtonText: "Cancel",
    denyButtonColor: "red",
  }).then((response) => {
    if (response.isConfirmed) {
      const filterData = data.filter((res, i) => i !== index);
      localStorage.setItem("data_elections", JSON.stringify(filterData));
      setData(JSON.parse(localStorage.getItem("data_elections")) || []);
    }
  });
};
