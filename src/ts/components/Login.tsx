import "@scss/components/Login.scss"
import LoginForm from "@components/LoginForm";
import LoginInfoPanel from "@components/LoginInfoPanel";

const Login = () => {
    return (
        <div className="login-container ">
            <LoginInfoPanel />
            <LoginForm />
        </div>
    )
}
export default Login