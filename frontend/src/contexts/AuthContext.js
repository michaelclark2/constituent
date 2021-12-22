import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Cognito from "../utils/aws";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    if (error) setError(null);
  }, [location.pathname]);

  useEffect(() => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (refreshToken) {
      Cognito.refreshToken(refreshToken)
        .then((res) => {
          const { AccessToken } = res.AuthenticationResult;
          setAccessToken(AccessToken);
          navigate("/");
        })
        .catch((err) => {
          navigate("/auth/login");
        })
        .finally(() => setInitialLoading(false));
    } else {
      setInitialLoading(false);
    }
  }, []);

  const login = (username, password) => {
    setLoading(true);

    Cognito.login({ username, password })
      .then((res) => {
        const { RefreshToken, AccessToken } = res.AuthenticationResult;
        localStorage.setItem("refreshToken", RefreshToken);
        setAccessToken(AccessToken);
        navigate("/");
      })
      .catch((err) => {
        setError(err);
        console.error(err);
      })
      .finally(setLoading(false));
  };

  const signup = (userInfo) => {
    setLoading(true);

    Cognito.signup(userInfo)
      .then((res) => {
        navigate("/auth/confirm");
      })
      .catch((err) => {
        setError(err);
        console.error(err);
      })
      .finally(() => setLoading(false));
  };

  const logout = () => {
    setLoading(true);

    Cognito.logout(accessToken)
      .then((res) => {
        setAccessToken();
        localStorage.removeItem("refreshToken");
        navigate("/");
      })
      .catch(console.error)
      .finally(setLoading(false));
  };

  const authValues = {
    accessToken,
    loading,
    login,
    logout,
    signup,
    error,
  };

  return (
    <AuthContext.Provider value={authValues}>
      {!initialLoading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
