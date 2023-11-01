import { ReactNode } from "react";

// types
export type AuthProviderTypeProps = {
  children: ReactNode;
};

export type AxiosClientType = {
  baseUrl: string;
  timeout: number;
  headers?: Record<string, string | number>;
};

export type FormDataType = {
  email: string;
  password: string;
};
export type PayloadType = FormDataType;

//interfaces
export interface AuthContextInterface {
  isAuthenticated: boolean;
  validateCreds: (formData: FormDataType) => Promise<void>;
}
