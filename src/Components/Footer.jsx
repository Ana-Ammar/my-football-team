import React from "react";

const Footer = () => {
  return (
    <footer className="text-center bg-black/90 text-white p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
