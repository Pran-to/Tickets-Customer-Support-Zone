import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-neutral text-neutral-content p-10 mt-7">
      <div className="footer sm:footer-horizontal">
        <nav>
          <h6 className="footer-title">CS — Ticket System</h6>
          <p className="w-60">
            Manages customer inquiries and support requests. Handles customer
            issues with efficiency and professionalism. Ensures timely
            resolution of customer concerns. Oversees customer support and issue
            resolution. Provides structured and efficient customer assistance.
          </p>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Our Mission</a>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Products & Services</a>
          <a className="link link-hover">Customer Stories</a>
          <a className="link link-hover">Download Apps</a>
        </nav>
        <nav>
          <h6 className="footer-title">Information</h6>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Join Us</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social Links</h6>
          <a className="link link-hover">
            <i className="fa-brands fa-square-x-twitter"></i>@CS — Ticket
            System
          </a>
          <a className="link link-hover">
            <i className="fa-brands fa-square-facebook"></i>@CS — Ticket System
          </a>
          <a className="link link-hover">
            <i className="fa-brands fa-square-linkedin"></i>@CS — Ticket System
          </a>
          <a className="link link-hover">
            <i className="fa-solid fa-square-envelope"></i>support@cst.com
          </a>
        </nav>
      </div>
      <div className=" border-t my-5">
        <h1  className=" text-center my-3">© 2025 CS — Ticket System. All rights reserved.</h1>
      </div>
    </footer>
  );
};

export default Footer;
