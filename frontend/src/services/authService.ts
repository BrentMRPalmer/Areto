import { BE_SERVER_PORT } from "@/constants";

export const register = async (userData) => {
    //return axios.post(API_URL + "register", userData);
};

export const login = async (userData) => {
    //const response = await axios.post(API_URL + "login", userData, { withCredentials: true });
    //return response.data;
};

export const getProfile = async () => {
    const response = await fetch(
        `http://localhost:${BE_SERVER_PORT}/api/students`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
    return response.data;
};