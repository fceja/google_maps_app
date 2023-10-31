import "@scss/components/App.scss";
import { AuthProvider } from "@context/AuthContext";
import LoginForm from "@components/loginForm/LoginForm";
import GoogleMap from "./googleMap/GoogleMap";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <div className="app">
        <LoginForm />
        <GoogleMap />
      </div>
    </AuthProvider>
  );
};

export default App;
