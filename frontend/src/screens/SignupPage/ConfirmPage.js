import React from "react";
import { Link } from "react-router-dom";

const ConfirmPage = (props) => {
  return (
    <div className="ConfirmPage card">
      <div className="card-header">
        <h2>Welcome to Constituent!</h2>
      </div>
      <div className="card-body text-center">
        <p>A confirmation link has been sent to your email address.</p>
        <p>
          Please confirm your email address before logging in for the first
          time.
        </p>
        <Link className="btn btn-primary col-12" to="/">
          Okay
        </Link>
      </div>
    </div>
  );
};

export default ConfirmPage;
