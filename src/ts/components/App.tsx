import "@scss/components/App.scss";
import { AuthProvider } from "@context/AuthContext";
import LoginForm from "@components/loginForm/LoginForm";
import Secret from "./Secret";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <div className="app">
        <LoginForm />
        <Secret />
      </div>
    </AuthProvider>
  );
};

export default App;
