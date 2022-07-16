import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const isLogin = sessionStorage.getItem("isLogin");
  console.log("GET SESSION header: ", isLogin);

  const handleLogout = () => {
    sessionStorage.removeItem("isLogin");
    console.log("GET SESSION header", isLogin);
  };

  return (
    <nav className="nav shadow-sm p-3 mb-5 bg-white rounded justify-content-between fw-bold fixed-top">
      <div>
        <NavLink to="/" className="nav-link text-dark ">
          LOGO
        </NavLink>
      </div>
      <div className="d-flex">
        <NavLink className="nav-link text-dark active " to="/">
          Home
        </NavLink>
        {isLogin === "true" ? (
          <>
            <NavLink className="nav-link text-dark" to="/products">
              Products
            </NavLink>
            <NavLink className="nav-link text-dark" to="/category">
              Category
            </NavLink>
            <NavLink className="nav-link text-dark" to="/users">
              Users
            </NavLink>
          </>
        ) : (
          ""
        )}
      </div>
      <div className="d-flex">
        {isLogin === "true" ? (
          <a
            className="nav-link text-dark"
            href="/login"
            onClick={handleLogout}
          >
            Logout
          </a>
        ) : (
          <a className="nav-link text-dark" href="/login">
            Login
          </a>
        )}
        <NavLink className="nav-link text-dark float-right" to="/cart">
          CART (0)
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
