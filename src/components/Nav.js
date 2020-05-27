/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import $ from "jquery";

export default function Navibar() {
    const [open, setOpen] = useState(false);

  return (
    <>
      <Collapse className="collapse navbar-collapse custom-navmenu" id="main-navbar" in={open}>
        <div className="container py-2 py-md-5">
          <div className="row align-items-start">
            <div className="col-md-2">
              <ul className="custom-menu">
                <li className="active">
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">About Me</a>
                </li>
                <li>
                  <a href="services.html">Services</a>
                </li>
                <li>
                  <a href="works.html">Works</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 d-none d-md-block  mr-auto">
              <div className="tweet d-flex">
                <span className="icofont-twitter text-white mt-2 mr-3"></span>
                <div>
                  <p>
                    <em>
                      Lorem ipsum ciis explicabo inventore. <br></br>{" "}
                      <a href="#">t.co/v82jsk</a>
                    </em>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-none d-md-block">
              <h3>Hire Me</h3>
              <p>
                Lorem ipsum dolor sit amet cidunt ut officiisexplicabo
                inventore. <br></br> <a href="#">myemail@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </Collapse>

      <nav className="navbar navbar-light custom-navbar">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            MyPortfolio.
          </a>
          <a
            href="#"
            className="burger"
            aria-controls="#main-navbar"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span></span>
          </a>
        </div>
      </nav>
    </>
  );
}
