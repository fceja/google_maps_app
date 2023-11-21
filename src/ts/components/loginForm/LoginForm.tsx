import Button from "react-bootstrap/Button";
import { ChangeEvent, FormEvent, useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import "@scss/components/loginForm/LoginForm.scss";
import { useAuth } from "@context/AuthContext";

const LoginForm: React.FC = () => {
  const { isAuthenticated, isLoggingIn, isSubmitted, validateCreds } =
    useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    validateCreds(formData);
  };

  return (
    <div className="form-container">
      {!isAuthenticated && (
        <Form onSubmit={handleSubmit} className="rounded-4 p-4 fw-medium">
          <Col className="label-email fw-bold">
            <Form.Label>Email</Form.Label>
          </Col>
          <Col className="input-email mb-3">
            <Form.Control
              type="email"
              name="email"
              placeholder="email"
              onChange={handleInputChange}
              className="rounded-3 lh-lg"
            />
          </Col>
          <Col className="label-pass mt-3 fw-bold">
            <Form.Label>Password</Form.Label>
          </Col>
          <Col className="input-pass mb-3">
            <Form.Control
              type="password"
              name="password"
              placeholder="password"
              onChange={handleInputChange}
              className="rounded-3 lh-lg"
            />
          </Col>
          <Col className="btn-div text-center">
            <Button
              role="button"
              variant="primary"
              type="submit"
              className="button-styles m-3 pl-2 pr-2 fs-5 fw-bold rounded-3"
            >
              Login
            </Button>
          </Col>
        </Form>
      )}
      {isSubmitted && isLoggingIn && (
        <div className="div-logging-in mt-1 text-center">...logging in</div>
      )}
      {isSubmitted && !isLoggingIn && !isAuthenticated && (
        <div className="div-failed-login mt-1 text-center text-danger">
          ...failed log in
        </div>
      )}
    </div>
  );
};

export default LoginForm;
