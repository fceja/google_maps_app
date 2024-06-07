import "@scss/components/LoginInfoPanel.scss"
import googleMapsLogo from "@assets/google-maps-logo.png";

const LoginInfoPanel = () => {
    return (
        <div className="login-info-panel">
            <div
                className="img-container mt-2 mt-md-0"
                style={{ minWidth: "125px" }}
            >
                < img
                    className="img"
                    src={googleMapsLogo}
                    alt="google-maps-logo"
                    style={{ width: "250px" }}
                />
            </div>
        </div>
    )
}
export default LoginInfoPanel