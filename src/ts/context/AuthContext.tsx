import { createContext, FC, ReactNode, useContext, useState } from "react";

import { FormPayloadT } from "@/ts/components/LoginForm"
import { authUser } from "@api/googleMaps/GoogleMapsApi";

type AuthProviderTypeProps = {
  children: ReactNode;
};

interface AuthContextInterface {
  isAuthd: boolean;
  isAuthTriggered: boolean;
  isAuthProcessing: boolean;
  performAuth: (formData: FormPayloadT) => Promise<void>;
}

const AuthContext = createContext<AuthContextInterface | undefined>(undefined);

export const AuthProvider: FC<AuthProviderTypeProps> = ({ children }) => {
  const [isAuthd, setIsAuthd] = useState(false);
  const [isAuthTriggered, setIsAuthTriggered] = useState(false);
  const [isAuthProcessing, setIsAuthProccessing] = useState(false);

  const performAuth = async (payloadData: FormPayloadT): Promise<void> => {
    setIsAuthTriggered(true);
    setIsAuthProccessing(true);

    const isAuthd = await authUser(payloadData);
    isAuthd ? setIsAuthd(true) : setIsAuthd(false);

    setIsAuthProccessing(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthd, isAuthTriggered, isAuthProcessing, performAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextInterface => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("Context is undefined");
  }

  return context;
};
