import Link from "next/link";
import React, { useEffect, useState } from "react";
import vocab from "../services/vocab";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailOutlineIcon from '@mui/icons-material/MailOutline';

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
      <div className="flex flex-wrap justify-between items-center">
        <div className="menu flex gap-4">
          <Link className="text-lg" href="/about">
            عن قيمني
          </Link>
          <Link className="text-lg" href="/contact">
            تواصل معنا
          </Link>
          <Link className="text-lg" href="/privacy-policy">
            سياسة الخصوصيه
          </Link>
          <Link className="text-lg" href="/terms-of-condition">
            شروط الاستخدام
          </Link>
        </div>
        <div className="logo">
          <div className="w-24">
            <img src="/assets/logo.png" alt="" />
          </div>
        </div>
        <div className="socials flex gap-4">
          {socials.map((social) => (
            <a
              target="_blank"
              href={social.value}
              key={social.key}
              className="hover:text-primary"
            >
              {socialIcons[social.key]}
            </a>
          ))}
          <a
            href="mailto:info@qaimni.com"
            className="hover:text-primary"
          >
            <MailOutlineIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
