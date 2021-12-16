import React from "react";
import { useAuth } from "../../contexts/AuthContext";

const LoginPage = (props) => {
  const { login } = useAuth();
  return (
    <div className="Login">
      <button
        className="btn btn-primary"
        onClick={() => login("michael.clark1992@gmail.com", "password")}
      >
        Login
      </button>
    </div>
  );
};

export default LoginPage;
