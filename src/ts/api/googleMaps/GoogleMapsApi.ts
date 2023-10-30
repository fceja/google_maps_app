import AxiosClient from "@utils/AxiosClient";
import { AxiosResponse } from "axios";

import { FormDataType } from "@appTypes/index";

const apiClient = AxiosClient({
  baseUrl: `${process.env.REACT_APP_USER_AUTH_API_URL}`,
  timeout: 5000,
  headers: {
    "x-api-key": `${process.env.REACT_APP_USER_AUTH_API_KEY}`,
    "app-name": `${process.env.REACT_APP_USER_AUTH_APP_NAME_HEADER}`,
  },
});

export const authUser = async (formData: FormDataType): Promise<boolean> => {
  try {
    const response: AxiosResponse = await apiClient.post("/auth/googleMaps", {
      email: formData.email,
      password: formData.password,
    });

    console.log(`response -> ${response}`);
    console.log(`response.data -> ${response.data}`);
    console.log(`response.headers -> ${response.headers}`);
    console.log(
      `response.headers entries -> ${Object.entries(response.headers)}`
    );

    // todo - fix this
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};
