import React from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import LoginPage from "../LoginPage/LoginPage";
import ConfirmPage from "../SignupPage/ConfirmPage";
import SignupPage from "../SignupPage/SignupPage";

const AuthPage = (props) => {
  return (
    <div className="AuthPage container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/confirm" element={<ConfirmPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
