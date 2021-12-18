import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const LoginPage = (props) => {
  const { login, loading } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className="Login card col-4">
      <div className="card-header">
        <h2>Login</h2>
      </div>
      <div className="card-body">
        <form onSubmit={submitForm}>
          <label htmlFor="loginEmail" className="form-label col-12">
            Email
            <input
              id="loginEmail"
              name="email"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label htmlFor="loginPassword" className="form-label col-12">
            Password
            <input
              id="loginPassword"
              name="password"
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            disabled={loading}
            className="btn btn-primary col-12 mt-2 mb-2"
            type="submit"
          >
            Login
          </button>
          <small className="col-12">
            <Link to="/signup">Don't have an account?</Link>
          </small>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
