"use client";
import { Button, Form } from "react-bootstrap";
import { MdMail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { useContext, useState } from "react";
import Link from "next/link";
import { showErrorColor } from "@/utilities/showErrorColor";
import { useRouter } from "next/navigation";
import { loginValidator } from "./functions/loginValidator";
import SessionContext from "@/context/SessionContext";
export default function Home() {
  const { push } = useRouter();
  const { setIsLogin } = useContext(SessionContext);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    showErrorColor(event);
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginValidator(values, setIsLogin, push);
  };
  return (
    <main className="sigin__main">
      <section className={`sigin__section shadow-lg`}>
        <Form onSubmit={handleSubmit}>
          <h6 className="mt-3 mb-4 text-center fw-bold text-secondary">
            Sign in to start your session
          </h6>
          <Form.Group
            className="mb-4 position-relative"
            controlId="formBasicEmail"
          >
            <Form.Control
              type="text"
              placeholder="Email"
              className="pe-5"
              maxLength={100}
              name="email"
              value={values.email}
              onChange={(e) => handleChange(e)}
            />
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
              maxLength={15}
              name="password"
              value={values.password}
              onChange={(e) => handleChange(e)}
            />
            <FaLock
              className="position-absolute top-0 end-0 mt-2 me-3 text-secondary"
              size={20}
            />
          </Form.Group>
          <span className="d-flex justify-content-end gap-2 align-items-center">
            <Button variant="primary" type="submit">
              Sign in
            </Button>
            <span>or</span>
            <Link href="/sign-up">
              <Button variant="primary" type="submit">
                Sign up
              </Button>
            </Link>
          </span>
        </Form>
      </section>
    </main>
  );
}
