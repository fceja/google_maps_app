import { useAuth } from "@context/AuthContext";
import LoginForm from "@components/loginForm/LoginForm";
import GoogleMap from "@components/googleMap/GoogleMap";

const MainPage = () => {
    const { isAuthd } = useAuth();

    return (
        <>
            {!isAuthd ? <LoginForm /> : <GoogleMap />}
        </>
    )
}

export default MainPage