import Button from "react-bootstrap/Button";
import { ChangeEvent, FormEvent, useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import "@scss/components/loginForm/LoginForm.scss";
import { useAuth } from "@context/AuthContext";

const LoginForm: React.FC = () => {
  const { isAuthenticated, validateCreds } = useAuth();
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
    <>
      {!isAuthenticated && (
        <div className="form-container">
          {
            <Form onSubmit={handleSubmit}>
              <Col className="label-email">
                <Form.Label>Email</Form.Label>
              </Col>
              <Col className="input-email">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="email"
                  onChange={handleInputChange}
                />
              </Col>
              <Col className="label-pass">
                <Form.Label>Password</Form.Label>
              </Col>
              <Col className="input-pass">
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={handleInputChange}
                />
              </Col>{" "}
              <Col className="m-5 p-5">
                <Button
                  variant="primary"
                  type="submit"
                  className="m-3 form-submit"
                >
                  Submit
                </Button>
              </Col>
            </Form>
          }
        </div>
      )}
    </>
  );
};

export default LoginForm;
