"use client";
import { data_elections } from "@/data/data_elections";
import { useFormValidator } from "@/hooks/useFormValidator";
import { errorValidator } from "@/utilities/errorValidator";
import { showErrorColor } from "@/utilities/showErrorColor";
import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { validateFormData } from "./functions/validateFormData";
import { TableData } from "./components/TableData";
import SessionContext from "@/context/SessionContext";
import { useRouter } from "next/navigation";
export default function Page() {
  const { push } = useRouter();
  const { isLogin, setIsLogin } = useContext(SessionContext);
  if (!isLogin) return push("/");
  const [values, setValues] = useState({
    year: "",
    politicalParty: "",
    county: "",
    voteCount: "",
  });
  const [objectClone, setObjectClone] = useState({ ...values });
  const [enableButton, setEnableButton] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const handleChange = (event) => {
    const { value, name } = event.target;
    showErrorColor(event);
    errorValidator(event, objectClone, setObjectClone);
    setValues({
      ...values,
      [name]: value,
    });
  };
  useFormValidator(objectClone, setEnableButton);
  const handleSubmit = (e) => {
    e.preventDefault();
    validateFormData(values, setShowTable);
  };

  const signOut = () => {
    localStorage.setItem("active_session", "false");
    setIsLogin(false);
  };
  return (
    <>
      {!showTable && isLogin ? (
        <section className="section__account shadow-lg position-relative">
          <div className="px-3 mb-4 bg-primary py-3 d-flex justify-content-between align-items-center">
            <h6 className="text-white text-start m-0">Election</h6>
            <button className="btn btn-danger" onClick={() => signOut()}>
              Sign out
            </button>
          </div>
          <Form onSubmit={handleSubmit} className="form__account">
            <Form.Group className="mb-4">
              <Form.Label htmlFor="year">Year</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter year"
                name="year"
                min="2000"
                max="2023"
                step="1"
                id="year"
                value={values.year}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label htmlFor="politicalParty">Political party</Form.Label>
              <Form.Select
                name="politicalParty"
                value={values.politicalParty}
                onChange={handleChange}
                id="politicalParty"
              >
                <option value="democrat">democrat</option>
                <option value="republic">republic</option>
                <option value="other">other</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-4 position-relative">
              <Form.Label htmlFor="county">County</Form.Label>
              <Form.Select
                placeholder="Select one"
                name="county"
                onChange={handleChange}
                id="county"
              >
                {data_elections.map((res, index) => (
                  <option key={index}>{res.codecounty}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-4 position-relative">
              <Form.Label htmlFor="voteCount">Vote count</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter number"
                min="0"
                name="voteCount"
                value={values.voteCount}
                onChange={handleChange}
                id="voteCount"
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              disabled={!enableButton ? true : false}
            >
              Submit
            </Button>
          </Form>
          <button
            className="btn btn-primary position-absolute btn__form"
            onClick={() => setShowTable(true)}
          >
            Show table
          </button>
        </section>
      ) : (
        <TableData setShowTable={setShowTable} />
      )}
    </>
  );
}
