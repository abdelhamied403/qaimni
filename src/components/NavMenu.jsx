import { Button } from "@mui/material";
import Link from "./Link";
import React from "react";

const NavMenu = (props) => {
  return (
    <>
      <li>
        <span className="text-xl hover:text-primary">
          <Link href="/">الرئيسية</Link>
        </span>
      </li>
      <li>
        <span className="text-xl hover:text-primary">
          <Link className="" href="/categories">
            الأقسام
          </Link>
        </span>
      </li>
      <li>
        <span className="text-xl hover:text-primary">
          <Link className="" href="/blog">
            المدونة
          </Link>
        </span>
      </li>
      <li>
        <span className="text-xl hover:text-primary">
          <Link className="" href="/jobs">
            الوظائف
          </Link>
        </span>
      </li>
      <li>
        <Button
          variant="contained"
          onClick={() =>
            window
              .open("https://company.qaimni.com/auth/signup", "_blank")
              .focus()
          }
        >
          <span className="text-white">تسجيل الشركات</span>
        </Button>
      </li>
    </>
  );
};

export default NavMenu;
