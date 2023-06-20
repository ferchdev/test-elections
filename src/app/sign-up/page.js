"use client";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { MdMail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { useState } from "react";
import { showErrorColor } from "@/utilities/showErrorColor";
import { errorValidator } from "@/utilities/errorValidator";
import { useRouter } from "next/navigation";
import { userRegister } from "./functions/userRegister";
import { useFormValidator } from "@/hooks/useFormValidator";

export default function Page() {
  const { push } = useRouter();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [objectClone, setObjectClone] = useState({ ...values });
  const [enableButton, setEnableButton] = useState(false);
  const handleChange = (event) => {
    showErrorColor(event);
    errorValidator(event, objectClone, setObjectClone);
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  useFormValidator(objectClone, setEnableButton);

  const handleSubmit = (e) => {
    e.preventDefault();
    userRegister(values, push);
  };
  return (
    <section className="section__signUp shadow-lg">
      <Form onSubmit={handleSubmit}>
        <h6 className="mt-3 mb-4 text-center fw-bold text-secondary">
          Sign up to start your session
        </h6>
        <Form.Group className="mb-4" controlId="inputName">
          <Form.Control
            type="text"
            placeholder="First name"
            maxLength={80}
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="inputLastName">
          <Form.Control
            type="text"
            placeholder="Last name"
            maxLength={80}
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group
          className="mb-4 position-relative"
          controlId="formBasicEmail"
        >
          <Form.Control
            type="text"
            placeholder="Enter email"
            maxLength={100}
            className="pe-5"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <MdMail
            className="position-absolute top-0 end-0 mt-2 me-3 text-secondary"
            size={22}
          />
        </Form.Group>

        <Form.Group
          className="mb-4 position-relative"
          controlId="formBasicPassword"
        >
          <Form.Control
            type="password"
            placeholder="Password"
            className="pe-5"
            name="password"
            value={values.password}
            maxLength={15}
            onChange={handleChange}
          />
          <FaLock
            className="position-absolute top-0 end-0 mt-2 me-3 text-secondary"
            size={20}
          />
        </Form.Group>
        <span className="d-flex justify-content-end align-items-center">
          <Button
            variant="primary"
            type="submit"
            disabled={!enableButton ? true : false}
          >
            Sign up
          </Button>
        </span>
      </Form>
    </section>
  );
}
