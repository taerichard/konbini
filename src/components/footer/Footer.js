import "./footerStyles.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <h1 className="footer-tite">Konbini</h1>
      <span className="footer-address">
        2123 Rainey Street Austin, TX, 78701
      </span>
      <span className="footer-phone">T. (526) 873 - 2912</span>
      <span className="footer-email">E. ben@konbini.llc</span>

      <span className="footer-email-signature">
        ©Kombini Design Limited 2022.
      </span>
    </footer>
  );
};

export default Footer;
