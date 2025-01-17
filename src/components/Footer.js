import React from "react";

export default function Footer() {
  return (
    <footer
      className="text-dark py-4"
      style={{
        marginTop: "auto",
        backgroundColor: "#fb6e50"
      }}
    >
      <div className="container">
        <div className="row">
          {/* Logo and About Section */}
          <div className="col-md-4">
            <h5>MH Cognition</h5>
            <p>
              Empowering learners worldwide with cutting-edge courses in AI, Data
              Science, and emerging technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-dark text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/courses" className="text-dark text-decoration-none">
                  Courses
                </a>
              </li>
              <li>
                <a href="/about" className="text-dark text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-dark text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info and Social Links */}
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>
              Email:{" "}
              <a
                href="mailto:support@mhcognition.com"
                className="text-dark text-decoration-none"
              >
                support@mhcognition.com
              </a>
            </p>
            <p className="text-dark text-decoration-none" >Phone: +91 12345 67890</p>
            <div>
              <a 
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark me-3"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark me-3"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="row mt-4">
          <div className="col text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} MH Cognition. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
