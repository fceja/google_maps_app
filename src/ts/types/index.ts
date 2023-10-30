export type AxiosClientType = {
  baseUrl: string;
  timeout: number;
  headers?: Record<string, string | number>;
};

export type FormDataType = {
  email: string;
  password: string;
};
