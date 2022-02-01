import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import Page from "../src/layout/Page";

const Profile = (props) => {
  const user = useSelector((state) => state.user.user);

  return (
    <div className="profile px-24 pt-8">
      <div className="flex justify-between items-start">
        <div className="flex items-start gap-8">
          <img
            className="bg-gray-300 w-36 border border-solid border-gray-400 rounded-2xl"
            src={user?.image_url || "/assets/default_user.png"}
            alt=""
          />
          <div className="info">
            <h1 className="text-4xl">{user?.name}</h1>
            <p className="text-gray-500">{user?.job_title}</p>
            <p className="text-gray-500">
              {user?.country} - {user?.state}
            </p>
          </div>
        </div>
        <div className="actions flex gap-4">
          <Link href="profile/edit" passHref>
            <Button variant="contained" size="large">
              تعديل
            </Button>
          </Link>
          {/* <Button variant="contained" color="accent" size="large">
            اشتراك premium
          </Button> */}
        </div>
      </div>
    </div>
  );
};

Profile.Layout = Page;
Profile.DisplayName = "الملف الشخصي";
export default Profile;
