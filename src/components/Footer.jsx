import React from "react";
// import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="py-2 my-4 mb-0 bg-primary">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <a href="/#" className="nav-link px-2">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/#" className="nav-link px-2">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a href="/#" className="nav-link px-2">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a href="/#" className="nav-link px-2">
            FAQs
          </a>
        </li>
        <li className="nav-item">
          <a href="/#about" className="nav-link px-2">
            About
          </a>
        </li>
      </ul>
      <p className="text-center text-white">&copy; 2021 Company, Inc</p>
    </footer>
  );
};

export default Footer;
