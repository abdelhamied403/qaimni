import Link from "next/link";
import React from "react";

const Footer = (props) => {
  return (
    <footer className="bg-gray-900 py-4 px-12 md:px-24 text-white">
      <div className="flex flex-wrap justify-between items-center">
        <div className="menu flex gap-4">
          <Link className="text-lg" href="/">
            الرئيسية
          </Link>
          <Link className="text-lg" href="/">
            الاقسام
          </Link>
          <Link className="" href="/blog">
            المدونه
          </Link>
        </div>
        <div className="logo">
          <div className="w-24">
            <img src="/assets/logo.png" alt="" />
          </div>
        </div>
        <div className="socials">socials</div>
      </div>
    </footer>
  );
};

export default Footer;
