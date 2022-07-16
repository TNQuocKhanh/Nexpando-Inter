import React from "react";
import { useState } from "react";

const API_URL = process.env.REACT_APP_API_URL;

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formValue = {
      username,
      password,
      email,
    };

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(formValue);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${API_URL}/register`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if ("error" in result) {
          alert(result.error);
        } else {
          alert("Regiter successfully.");
        }
        window.location = "/login";
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="container py-5 my-5">
      <div className="container py-5 my-5">
        <h3 className="text-center p-3">REGISTER</h3>
        <form className="border p-3" onSubmit={handleSubmit}>
          <div className="form-group my-2">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
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
            REGISTER
          </button>
        </form>
        <span>
          Have you account?{" "}
          <a className="text-decoration-none" href="/login">
            login
          </a>
        </span>
      </div>
    </div>
  );
};

export default Register;
