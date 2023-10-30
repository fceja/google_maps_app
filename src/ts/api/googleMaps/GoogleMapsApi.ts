import AxiosClient from "@utils/AxiosClient";
import { FormDataType } from "@appTypes/index";

const apiClient = AxiosClient({
  baseUrl: `${process.env.REACT_APP_USER_AUTH_API_URL}`,
  timeout: 5000,
  headers: {
    "X-Api-Key": `${process.env.REACT_APP_USER_AUTH_API_KEY}`,
    "App-Name": `${process.env.REACT_APP_USER_AUTH_APP_NAME_HEADER}`,
  },
});

export const authUser = async (formData: FormDataType): Promise<boolean> => {
  try {
    const response = await apiClient.post("/auth/googleMaps", {
      email: formData.email,
      password: formData.password,
    });

    return response.headers["app-auth"];
  } catch (error) {
    return false;
  }
};
