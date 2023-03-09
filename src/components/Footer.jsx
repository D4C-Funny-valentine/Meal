import React from "react";
import "./Footer.css";
import { GiKnifeFork } from "react-icons/gi";

const Footer = () => {
  return (
    <div className="container-fluid bg-footer mt-auto pt-auto">
      <div className="container">
        <div className="row py-5">
          <div className="col-12 col-lg-4 text-center text-lg-start mb-4 mb-lg-0">
            <div className="text-light">
              <h4 className="text-light">
                <GiKnifeFork className=" display-6" />
              </h4>
              <p className="">
                Food for the body is not <br />
                enough. There must be food <br />
                for the soul.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <div className="row justify-content-center justify-content-lg-start text-light">
              <div className="col-5 col-md-4 col-lg-3 mb-3 mb-md-4">
                <div className="d-flex flex-column">
                  <h6>Menu</h6>
                  <ul className="p-0">
                    <li>Home</li>
                    <li>About</li>
                    <li>Order</li>
                    <li>Pre-Order</li>
                  </ul>
                </div>
              </div>

              <div className="col-5 col-md-4 col-lg-3 mb-3 mb-md-4">
                <div className="d-flex flex-column">
                  <h6>Menu</h6>
                  <ul className="p-0">
                    <li>Home</li>
                    <li>About</li>
                    <li>Order</li>
                    <li>Pre-Order</li>
                  </ul>
                </div>
              </div>

              <div className="col-5 col-md-4 col-lg-3 mb-3 mb-md-4">
                <div className="d-flex flex-column">
                  <h6>Menu</h6>
                  <ul className="p-0">
                    <li>Home</li>
                    <li>About</li>
                    <li>Order</li>
                    <li>Pre-Order</li>
                  </ul>
                </div>
              </div>

              <div className="col-5 col-md-5 col-lg-3 mb-3 mb-md-4">
                <div className="d-flex flex-column">
                  <h6 className="">Social Media</h6>
                  <ul className="p-0 d-flex flex-row footer-social-link">
                    <li className=" icons">
                      <a href="#https://www.facebook.com/" className=" text-primary">
                        <i className=" bi bi-facebook fs-4 me-2"></i>
                      </a>
                    </li>
                    <li className=" icons">
                      <a href="#https://www.instagram.com/" className="text-instagram">
                        <i className=" bi bi-instagram fs-4 me-2"></i>
                      </a>
                    </li>
                    <li className=" icons">
                      <a href="#https://twitter.com/" className=" text-info">
                        <i className=" bi bi-twitter fs-4"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
