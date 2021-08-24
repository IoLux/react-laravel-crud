import React from "react";
// import "../css/Footer.css";

const Footer = () => {
  return (
    <div className="wow" style={{ color: "white", backgroundColor: "blue" }}>
      <footer className="py-2 my-4 mb-0">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="/#" className="nav-link px-2 text-muted">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/#" className="nav-link px-2 text-muted">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="/#" className="nav-link px-2 text-muted">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="/#" className="nav-link px-2 text-muted">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="/#about" className="nav-link px-2 text-muted">
              About
            </a>
          </li>
        </ul>
        <p className="text-center text-muted">&copy; 2021 Company, Inc</p>
      </footer>
    </div>
  );
};

export default Footer;