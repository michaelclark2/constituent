import React, { useState } from "react";

import { Link } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";
import { US_STATES } from "../../utils/constants";

const SignupPage = (props) => {
  const { loading, signup, error } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    signup({ username, password, street, city, state, zipcode });
  };

  return (
    <div className="Signup card border-primary">
      <div className="card-header">
        <h2>Sign Up</h2>
      </div>
      <div className="card-body">
        <form onSubmit={submitForm}>
          <div className="row gx-2 gy-1">
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
            <div className="col-12 mt-2">
              <small>
                Please enter the address on your voter registration to determine
                your congressional district.
              </small>
              <hr />
            </div>
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
            <div className="col-5">
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
            </div>
            <div className="col-3">
              <label htmlFor="signupState" className="form-label col-12">
                State
                <select className="form-select">
                  {[
                    <option value="" selected>
                      ---
                    </option>,
                  ].concat(
                    Object.entries(US_STATES).map((stateArr) => {
                      const [value, display] = stateArr;
                      return (
                        <option
                          value={value}
                          {...(state == value ? "selected" : "")}
                        >
                          {value}
                        </option>
                      );
                    })
                  )}
                </select>
              </label>
            </div>
            <div className="col-4">
              <label htmlFor="signupZipcode" className="form-label col">
                Zipcode
                <input
                  id="signupZipcode"
                  name="zipcode"
                  className="form-control"
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
                />
              </label>
            </div>

            <div className="col-12">
              <button
                disabled={loading}
                className="btn btn-primary col-12 mb-2 mt-2"
                type="submit"
              >
                Register
              </button>
              {error ? (
                <div className="alert alert-danger">{error.message}</div>
              ) : (
                ""
              )}
            </div>
            <small className="col-12">
              <Link to="/auth/login">Already have an account?</Link>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
