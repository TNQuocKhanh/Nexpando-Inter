import React from "react";
import { useState } from "react";

const API_URL = process.env.REACT_APP_API_URL;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValue = {
      email,
      password,
    };
    // console.log(formValue);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(formValue);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${API_URL}/login`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("RESULT: ", result);
        if ("message" in result) {
          alert("Login successfully.");
          setIsLogin(true);
          sessionStorage.setItem("isLogin", true);
          window.location = "/";
        }
        if ("error" in result) {
          alert(result.error);
          console.log("ERROR: ", result.error);
          setIsLogin(false);
          sessionStorage.setItem("isLogin", false);
        }
      })
      .catch((error) => {
        alert("ERROR:", error);
      });
  };

  return (
    <div className="container py-5 my-5">
      <h3 className="text-center p-3">LOGIN</h3>
      <form className="border p-3" onSubmit={handleSubmit}>
        <div className="form-group my-2">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-outline-dark my-2">
          LOGIN
        </button>
      </form>
      <a href="/register" className="text-decoration-none">
        Register now
      </a>
    </div>
  );
};

export default Login;
