import "@scss/components/LoginInfoPanel.scss"
import googleMapsLogo from "@assets/google-maps-logo.png";

const LoginInfoPanel = () => {
    return (
        <div className="info-panel-container">
            <div
                className="img-container"
            >
                < img
                    className="img"
                    src={googleMapsLogo}
                    alt="google-maps-logo"
                />
            </div>
        </div>
    )
}
export default LoginInfoPanel