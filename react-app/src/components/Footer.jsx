import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="text-center text-white fixed-bottom mt-5"
      style={{ backgroundColor: "#f1f1f1" }}
    >
      {/* <div className="container pt-4">
        <section className="mb-4">
          <NavLink
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            to="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fa fa-facebook-f"></i>
          </NavLink>

          <NavLink
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            to="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fa fa-twitter"></i>
          </NavLink>

          <NavLink
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            to="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fa fa-google"></i>
          </NavLink>

          <NavLink
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            to="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fa fa-instagram"></i>
          </NavLink>

          <NavLink
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            to="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fa fa-linkedin"></i>
          </NavLink>
          <NavLink
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            to="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fa fa-github"></i>
          </NavLink>
        </section>
      </div> */}

      <div
        className="text-center text-dark p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright:
        <NavLink className="text-dark" to="https://mdbootstrap.com/">
          MDBootstrap.com
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
