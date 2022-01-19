import React from "react";
import logo from "../assets/logo.svg";
import Image from "next/image";
import { Button } from "@mui/material";
import Link from "./Link";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";

const Navbar = (props) => {
  const router = useRouter();

  return (
    <nav>
      <div
        className={`flex items-center justify-between ${
          props.dark ? "text-white" : ""
        }`}
      >
        <div className="flex items-center space-x-4 rtl:space-x-reverse pointer-events-auto">
          <Image width={192} src={logo} alt="" />
          <span className="text-xl hover:text-primary">
            <Link href="/">الرئيسية</Link>
          </span>
          <span className="text-xl hover:text-primary">
            <Link className="" href="/sections">
              الأقسام
            </Link>
          </span>
        </div>
        <div className="actions pointer-events-auto flex gap-4">
          <Button
            variant="contained"
            onClick={() => router.push("/auth/login")}
          >
            <span className="text-white">تسجيل دخول</span>
          </Button>
          {!props.noSearch && (
            <Button variant="outlined" onClick={() => router.push("/search")}>
              <div className="flex gap-12 -ml-2">
                <div className="search flex gap-2">
                  <SearchIcon />
                  <span className="text-gray-400">ابحث ...</span>
                </div>
                <div className="border border-solid border-primary bg-primary bg-opacity-20 px-2 rounded-lg">
                  Ctrl+K
                </div>
              </div>
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
