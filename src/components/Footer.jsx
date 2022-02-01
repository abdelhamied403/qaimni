import Link from "next/link";
import React, { useEffect, useState } from "react";
import vocab from "../services/vocab";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Footer = (props) => {
  const [socials, setSocials] = useState([]);

  const socialIcons = {
    facebook: <FacebookIcon />,
    instagram: <InstagramIcon />,
    twitter: <TwitterIcon />,
    linkedin: <LinkedInIcon />,
  };

  const loadSocials = async () => {
    const res = await vocab.getSocials();
    setSocials(res.data);
  };

  useEffect(() => {
    loadSocials();
  }, []);

  return (
    <footer className="bg-gray-900 py-4 px-12 md:px-24 text-white">
      <div className="flex flex-wrap justify-center md:justify-between gap-4 items-center">
        <div className="menu flex gap-4">
          <Link className="text-lg" href="/about">
            <a className="hover:text-primary">عن قيمني</a>
          </Link>
          <Link className="text-lg" href="/contact">
            <a className="hover:text-primary">تواصل معنا</a>
          </Link>
          <Link className="text-lg" href="/privacy-policy">
            <a className="hover:text-primary">سياسة الخصوصيه</a>
          </Link>
          <Link className="text-lg" href="/terms-of-condition">
            <a className="hover:text-primary">شروط الاستخدام</a>
          </Link>
        </div>
        <div className="logo">
          <img src="/assets/logo-demo.png" alt="" />
        </div>
        <div className="socials flex gap-4">
          {socials.map((social) => (
            <a
              target="_blank"
              rel="noreferrer"
              href={social.value}
              key={social.key}
              className="hover:text-primary"
            >
              {socialIcons[social.key]}
            </a>
          ))}
          <a href="mailto:info@qaimni.com" className="hover:text-primary">
            <MailOutlineIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
