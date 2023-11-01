import { createContext, useContext, useState, FC } from "react";

import {
  AuthContextInterface,
  AuthProviderTypeProps,
  PayloadType,
} from "@appTypes/index";
import { authUser } from "@api/googleMaps/GoogleMapsApi";

const AuthContext = createContext<AuthContextInterface | undefined>(undefined);

export const AuthProvider: FC<AuthProviderTypeProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const validateCreds = async (payloadData: PayloadType): Promise<void> => {
    const isAuthd = await authUser(payloadData);
    if (isAuthd) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, validateCreds }}>
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
