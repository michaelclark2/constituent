import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Cognito from "../utils/aws";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const login = (username, password) => {
    setLoading(true);

    Cognito.login({ username, password })
      .then((res) => {
        setRefreshToken(res.RefreshToken);
        setAccessToken(res.AuthenticationResult.AccessToken);
        navigate("/");
      })
      .catch(console.error)
      .finally(setLoading(false));
  };

  const authValues = {
    accessToken,
    loading,
    login,
  };

  return (
    <AuthContext.Provider value={authValues}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
