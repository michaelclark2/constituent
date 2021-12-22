import React from "react";
import { Link } from "react-router-dom";

const ConfirmPage = (props) => {
    return (
        <div className="ConfirmPage">
            <h2>Please confirm your email address before logging in.</h2>
            <Link to="/">Okay</Link>
        </div>
    )
}

export default ConfirmPage;
