import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer.subscription">
        <p className="footer-subscription-heading">
          Sign up to make an impart in the world for today{" "}
        </p>
        <p className="footer-subscription-heading">Subscribe to our newsletter</p>
        <p className="footer-subscription-heading">you can unsubscribe at anytime</p>
        <div className="input-areas">
          <form>
            <input type="email" name="email" placeholder="YourEmail" className="footer-input" />
            <Button buttonstyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Helping Hands <i className="fab fa-typo3"></i>
            </Link>
          </div>
          <small className="website-rights">Helping Hands @ 2020</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
