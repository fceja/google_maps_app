import { useAuth } from "@context/AuthContext";
import Login from "@components/Login";
import GoogleMap from "@/ts/components/GoogleMap";

const MainPage = () => {
    const { isAuthd } = useAuth();

    return (
        <>
            {!isAuthd ? <Login /> : <GoogleMap />}
        </>
    )
}

export default MainPage