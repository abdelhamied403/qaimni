import { Button } from "@mui/material";
import Link from "./Link";
import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/slices/user.slice";

const NavMenu = (props) => {

  const router = useRouter();
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("provider");
    localStorage.removeItem("user");
    dispatch(setUser(null));
    router.replace("/auth/login");
  };

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
            المدونه
          </Link>
        </span>
      </li>
      <li>
        <Button
          variant="contained"
          onClick={() =>
            window.open("https://company.qaimni.com/auth/signup", "_blank").focus()
          }
        >
          <span className="text-white">تسجيل الشركات</span>
        </Button>
      </li>
      <li>
        <Button
          variant="contained"
          onClick={logout}
        >
          <span className="text-white">خروج</span>
        </Button>
      </li>
    </>
  );
};

export default NavMenu;
