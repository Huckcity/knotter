import React from "react";
import { useAuth } from "./libs/contextLib";

export default function Home(props) {
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
  }

  return (
    <div>
      <div>Logged in</div>
      <button onClick={logOut}>Log out</button>
    </div>
  );
}
