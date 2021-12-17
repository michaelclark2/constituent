import React from "react";
import { useAuth } from "../../contexts/AuthContext";

const HomePage = (props) => {
  const { logout } = useAuth();

  return (
    <div className="HomePage">
      <h2>
        Welcome to Constituent! Where the government is actually listening to
        you!
      </h2>
      <button onClick={logout}>Sign Out</button>
    </div>
  );
};

export default HomePage;
