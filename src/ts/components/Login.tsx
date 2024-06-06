import "@scss/components/Login.scss"
import LoginForm from "@components/LoginForm";
import LoginInfoPanel from "@components/LoginInfoPanel";

const Login = () => {
    return (
        <div className="login-div">
            <LoginInfoPanel />
            <LoginForm />
        </div>
    )
}
export default Login