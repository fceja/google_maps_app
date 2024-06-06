import "@scss/pages/MainPage.scss"
import { useAuth } from "@context/AuthContext";
import Login from "@components/Login";
import GoogleMap from "@/ts/components/GoogleMap";

const MainPage = () => {
    const { isAuthd } = useAuth();

    return (
        <div className="main-page d-flex align-items-center justify-content-center">
            {!isAuthd ? <Login /> : <GoogleMap />}
        </div>
    )
}

export default MainPage