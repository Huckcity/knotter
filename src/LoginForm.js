import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "./libs/contextLib";
import auth from "./auth";

export default function LoginForm(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setisError] = useState(false);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const { setAuthTokens } = useAuth();
  const referrer = props.location.referrer || "/";

  function handleSubmit() {
    if (auth.login(username, password)) {
      setAuthTokens(username + password);
      setLoggedIn(true);
    } else {
      setisError(true);
    }
  }

  if (isLoggedIn) {
    return <Redirect to={referrer} />;
  }

  return (
    <div className="w-full max-w-xs">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="http://google.com"
          >
            Forgot Password?
          </a>
          {isError && (
            <div>The username or password provided were incorrect!</div>
          )}
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  );
}
