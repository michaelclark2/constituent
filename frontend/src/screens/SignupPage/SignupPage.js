import React, { useState } from "react";

import { Link } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

const SignupPage = (props) => {
  const { loading, signup } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="Signup card col-4">
      <div className="card-header">
        <h2>Sign Up</h2>
      </div>
      <div className="card-body">
        <form onSubmit={submitForm}>
          <label htmlFor="signupEmail" className="form-label col-12">
            Email
            <input
              id="signupEmail"
              name="email"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label htmlFor="signupPassword" className="form-label col-12">
            Password
            <input
              id="signupPassword"
              name="password"
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label htmlFor="signupAddress" className="form-label col-12">
            Street
            <input
              id="signupAddress"
              name="street"
              className="form-control"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </label>
          <label htmlFor="signupCity" className="form-label col-12">
            City
            <input
              id="signupCity"
              name="city"
              className="form-control"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </label>
          <label htmlFor="signupState" className="form-label col-12">
            State
            <input
              id="signupState"
              name="state"
              className="form-control"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </label>
          <label htmlFor="signupZipcode" className="form-label col-12">
            Zipcode
            <input
              id="signupZipcode"
              name="zipcode"
              className="form-control"
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
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
            <Link to="/login">Already have an account?</Link>
          </small>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
