import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../assets/logo.png";

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
        </div>
        <div className="logo">
          <div className="w-24">
            <Image src={logo} alt="" />
          </div>
        </div>
        <div className="socials">socials</div>
      </div>
    </footer>
  );
};

export default Footer;
