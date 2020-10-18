import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthContext } from "./libs/contextLib";
import PrivateRoute from "./PrivateRoute";
import Home from "./Home";
import "./tailwind.css";
import Nav from "./Nav";
import LoginForm from "./LoginForm";
import LandingPage from "./LandingPage";

export default function App() {
  // const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState();

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <Nav />
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={LoginForm} />
        <PrivateRoute path="/home" component={Home} />
      </Router>
    </AuthContext.Provider>
  );
}
