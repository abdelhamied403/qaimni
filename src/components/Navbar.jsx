import React, { useRef } from "react";
import { Button } from "@mui/material";
import Link from "./Link";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import { useRouter } from "next/router";

const Navbar = (props) => {
  const router = useRouter();
  const menu = useRef();

  const toggleMenu = () => {
    menu.current.classList.toggle("hidden");
  };

  return (
    <nav className="px-8 md:px-12 lg:px-24 py-2 sticky top-0 z-20 bg-white shadow-lg">
      <div
        className={`flex gap-4 items-center justify-between relative ${
          props.dark ? "text-white" : ""
        }`}
      >
        <div className="menu flex items-center pointer-events-auto">
          <img className="max-w-full" src="../assets/logo.png" alt="" />
          <ul
            className="
              lg:flex lg:static top-12 left-0 text-black lg:text-inherit bg-white lg:bg-transparent
              hidden gap-4 items-center list-none absolute px-4 py-2 z-20
            "
            ref={menu}
          >
            <li>
              <span className="text-xl hover:text-primary">
                <Link href="/">الرئيسية</Link>
              </span>
            </li>
            <li>
              <span className="text-xl hover:text-primary">
                <Link className="" href="/sections">
                  الأقسام
                </Link>
              </span>
            </li>
          </ul>
        </div>

        <div className="actions pointer-events-auto flex items-center gap-4">
          {!props.noSearch && (
            <>
              <div className="searchbar hidden md:flex">
                <Button
                  variant="outlined"
                  onClick={() => router.push("/search")}
                >
                  <div className="flex justify-between gap-4 md:gap-12 -ml-2">
                    <div className="search flex gap-2">
                      <SearchIcon />
                      <span className="text-gray-400">ابحث ...</span>
                    </div>
                    <div className="border border-solid border-primary bg-primary bg-opacity-20 px-2 rounded-lg">
                      Ctrl+K
                    </div>
                  </div>
                </Button>
              </div>
              <div
                className="searchbar flex md:hidden"
                onClick={() => router.push("/search")}
              >
                <SearchIcon />
              </div>
            </>
          )}
          <div className="hidden lg:flex">
            <Button
              variant="contained"
              onClick={() => router.push("/auth/login")}
            >
              <span className="text-white">تسجيل دخول</span>
            </Button>
          </div>
          <div
            className="flex lg:hidden"
            onClick={() => router.push("/auth/login")}
          >
            <PersonIcon />
          </div>
          <span className="flex lg:hidden" onClick={toggleMenu}>
            <MenuIcon />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
