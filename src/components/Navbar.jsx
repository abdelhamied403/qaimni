import React, { useState } from "react";
import { Button, Drawer, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
import NavMenu from "./NavMenu";
import { setUser } from "../redux/slices/user.slice";

const Navbar = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("provider");
    localStorage.removeItem("user");
    dispatch(setUser(null));
    router.replace("/auth/login");
  };

  return (
    <nav className="px-8 md:px-12 lg:px-24 py-2 sticky top-0 z-20 bg-white shadow-lg">
      <div
        className={`flex gap-4 items-center justify-between relative ${
          props.dark ? "text-white" : ""
        }`}
      >
        <div className="menu flex items-center pointer-events-auto">
          <img
            className="w-36 cursor-pointer"
            src="/assets/logo.svg"
            alt=""
            onClick={() => router.push("/")}
          />
          <ul className="lg:flex text-black hidden list-none gap-4">
            <NavMenu />
          </ul>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
          >
            <ul className="lg:hidden text-black px-12 flex flex-col items-center gap-4 list-none">
              <img
                className="max-w-full cursor-pointer my-8"
                src="/assets/logo.svg"
                alt=""
                onClick={() => router.push("/")}
              />
              <NavMenu />
              <Button variant="contained" color="error" onClick={logout}>
                <span className="text-white">تسجيل الخروج</span>
              </Button>
            </ul>
          </Drawer>
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
                      Ctrl+Q
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
            {user && (
              <>
                <Button
                  className="flex items-center gap-2"
                  variant="default"
                  onClick={() => router.push("/profile")}
                >
                  {!user.image_url && <PersonIcon color="primary" />}
                  {user.image_url && (
                    <img
                      className="w-6 h-6 object-cover"
                      src={user.image_url}
                      alt=""
                    />
                  )}
                  <p>{user.name}</p>
                </Button>
                <IconButton onClick={logout}>
                  <LogoutIcon />
                </IconButton>
              </>
            )}
            {!user && (
              <Button
                variant="contained"
                onClick={() => router.push("/auth/login")}
              >
                <span className="text-white">تسجيل دخول</span>
              </Button>
            )}
          </div>
          <div
            className="flex lg:hidden"
            onClick={() => router.push(user ? "/profile" : "/auth/login")}
          >
            <PersonIcon />
          </div>
          <span className="flex lg:hidden" onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
