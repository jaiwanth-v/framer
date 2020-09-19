import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer__text">
      © {new Date().getFullYear()} - Jaiwanth Vemula
    </footer>
  );
};

export default Footer;
