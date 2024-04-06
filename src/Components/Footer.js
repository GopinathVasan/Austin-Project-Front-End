import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Austin Partnership's</h1>
        </div>
        <div>
          <a href="/">
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href="https://www.instagram.com/austinpartnership1?utm_source=qr&igsh=MTdmYjk3aXk0YW9xeA==">
            <i className="fab fa-instagram-square"></i>
          </a>
          <a href="https://www.youtube.com/@businessmindedwolf730">
          <i class="fa-brands fa-square-youtube"></i>
          </a>
          <a href="/">
          <i class="fa-brands fa-square-x-twitter"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/display">Security & Fraud Awareness</a>
          <a href="/">Regulatory Disclosures</a>
          <a href="/">Stock portfolio</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">Site Map</a>
          <a href="/">Client Logins</a>
          <a href="/">Employee Login</a>
          <a href="/">Alumni Network</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/loginp">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/contact">Contact Us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms & Conditions</a>
          <a href="/">Your Privacy Choices</a>
          <a href="/">License</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
