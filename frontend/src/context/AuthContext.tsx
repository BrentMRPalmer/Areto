import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Initialize context values
const AuthContext = createContext({
  token: "",
  user: {},
  loginAction: (res: any) => {},
  logOut: () => {},
});

function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user") ?? "{}")
  );
  const [token, setToken] = useState(localStorage.getItem("authToken") || "");
  const navigate = useNavigate();

  const loginAction = async (res) => {
    try {
      console.log(res);
      if (res) {
        setUser(res.data.user);
        setToken(res.token);
        localStorage.setItem("authToken", res.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/");
        return;
      }
      throw new Error(message);
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
