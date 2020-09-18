import React from "react";

const Footer: React.FC = () => {
  return (
    <p className="footer__text">
      © {new Date().getFullYear()} - Jaiwanth Vemula
    </p>
  );
};

export default Footer;
