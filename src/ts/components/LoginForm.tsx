import { ChangeEvent, useEffect, useState } from "react";

import "@scss/components/LoginForm.scss";
import { useAuth } from "@context/AuthContext";

export type FormPayloadT = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [formData, setFormData] = useState<FormPayloadT>({
    email: "",
    password: "",
  });
  const { isAuthd, isAuthProcessing, isAuthTriggered, performAuth } = useAuth();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isFormDataValid, setIsFormDataValid] = useState(false);
  const [isMissingVisible, setMissingVisible] = useState(false);

  useEffect(() => {
    const isEmailValid = /^[^@\s]+@[^@\s]+\.(com|org|net|edu|gov)$/.test(formData.email);
    isEmailValid && formData.password.length > 0 ? setIsFormDataValid(true) : setIsFormDataValid(false)

  }, [formData])

  const handleHoverEnter = () => {
    setMissingVisible(!isFormDataValid)
    setIsButtonDisabled(!isFormDataValid)
  }

  const handleHoverLeave = () => {
    setMissingVisible(false)
  }

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    performAuth(formData);
  };

  return (
    <div className="form-container d-flex flex-column">
      <form onSubmit={handleSubmit}>
        <span className="greeting p-3">Please enter credentials to login.</span>
        <hr></hr>
        <label className="label-email mt-3 mb-1 mx-3">Email</label>
        <input
          className="input-email-form py-1 mx-3"
          name="email"
          onChange={handleInputChange}
          required
          type="email"
        />
        <label className="label-pass mt-3 mx-3">Password</label>
        <input
          type="password"
          name="password"
          onChange={handleInputChange}
          className="input-pass-form py-1 mx-3"
          required
        />
        <div
          className="btn-div mx-3"
          onMouseEnter={handleHoverEnter}
          onMouseLeave={handleHoverLeave}
        >
          <button
            type="submit"
            className={`button-styles w-100 ${isFormDataValid ? "btn-valid" : "btn-invalid"}`}
            disabled={isButtonDisabled}
          >
            Login
          </button>
        </div>
        <div
          className="missing-fields mt-1"
          style={{ visibility: `${isMissingVisible ? 'visible' : 'hidden'}` }}>...missing or invalid fields
        </div>
        {isAuthTriggered && !isAuthProcessing && !isAuthd && (
          <div className="div-failed-login">...failed login attempt</div>
        )}
      </form>
    </div >
  );
};

export default LoginForm;
