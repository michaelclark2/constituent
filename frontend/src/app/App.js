import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";

import { AuthProvider, useAuth } from "../contexts/AuthContext";

import Header from "../components/Header/Header";
import HomePage from "../screens/HomePage/HomePage";
import AuthPage from "../screens/AuthPage/AuthPage";

const RequireAuth = ({ children }) => {
  const { accessToken } = useAuth();
  if (!accessToken) return <Navigate to="/auth/login" />;
  return children;
};

const Router = () => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <RequireAuth>
            <HomePage />
          </RequireAuth>
        }
      />
      <Route path="/auth/*" element={<AuthPage />} />
    </Routes>
  );
};

const App = () => {
  return (
    <div className="App">
      <div className="container-fluid">
        <Header />
        <div className="row justify-content-center">
          <BrowserRouter>
            <AuthProvider>
              <Router />
            </AuthProvider>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default App;
