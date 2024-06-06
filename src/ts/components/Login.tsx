import "@scss/components/Login.scss"
import LoginForm from "@components/LoginForm";
import LoginInfoPanel from "@components/LoginInfoPanel";

const Login = () => {
    return (
        <div className="login-div d-flex align-items-center justify-content-center">
            <LoginInfoPanel />
            <LoginForm />
        </div>
    )
}
export default Login