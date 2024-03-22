import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer1">
        <section className="mini-footer">
          <h5>Be the first to know</h5>
          <p>sign up for updates and meta mouse</p>
          <input type="text" placeholder="Enter your email" />
          <button>Subscribe</button>
        </section>
        <section className="mini-footer">
          <h5>Contact us</h5>
          <p>+444 231 888 999</p>
          <p>kunal@gmail.com</p>
          <h6>Currency</h6>
          <p>+USD</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima,
            velit.
          </p>
        </section>
      </div>

      <div className="footer2">
        <section>
          <h5>Meta mouse</h5>
          <a href="">About us</a>
          <a href="">Stories</a>
        </section>
        <section>
          <h5>Quicks links</h5>
          <a href="">Payment and pricing</a>
        </section>
        <section>
          <h5>Follow us</h5>
        </section>
      </div>
    </div>
  );
};

export default Footer;
