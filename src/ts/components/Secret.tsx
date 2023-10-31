import { useAuth } from "@context/AuthContext";

const Secret: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return <>{isAuthenticated && <div>This is Secret</div>}</>;
};

export default Secret;
