import { Button } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import withAuth from "../src/components/HOC/withAuth";
import Page from "../src/layout/Page";
import { setAlert } from "../src/redux/slices/app.slice";
import userService from "../src/services/user";

const Profile = (props) => {
  const user = useSelector((state) => state.user.user);
  const cvFile = useRef(null);
  const [reader, setReader] = useState();
  const dispatch = useDispatch();

  const onCVUpload = (e) => {
    const file = e.target.files[0];
    reader.readAsDataURL(file);

    reader.onloadend = async function (e) {
      await userService.uploadCV(e.target.result);
      dispatch(
        setAlert({
          message: "لقد تم تحميل السيره الذاتيه بنجاح",
          status: "success",
        })
      );
      setTimeout(() => {
        dispatch(setAlert(null));
      }, 2000);
    };
  };

  useEffect(() => {
    setReader(new FileReader());
  }, []);

  return (
    <div className="profile md:px-24 px-12 py-8">
      <div className="flex flex-wrap gap-4 justify-between items-start">
        <div className="flex flex-wrap items-start gap-8">
          <img
            className="bg-gray-300 w-36 border border-solid border-gray-400 rounded-2xl"
            src={user?.image_url || "/assets/default_user.png"}
            alt=""
          />
          <div className="info">
            <h1 className="text-4xl">{user?.name}</h1>
            <p className="text-gray-500">{user?.job_title}</p>
            <p className="text-gray-500">{user?.phone}</p>
            <p className="text-gray-500">{user?.company}</p>
            <p className="text-gray-500">
              {user?.country} - {user?.state}
            </p>
            <div className="text-primary">
              <Link href={user.cv_url}>السيره الذاتيه</Link>
            </div>
          </div>
        </div>
        <div className="actions flex gap-4">
          <Link href="profile/edit" passHref>
            <Button variant="contained" size="large">
              تعديل
            </Button>
          </Link>
          <div className="actions">
            <input
              type="file"
              id="cv"
              ref={cvFile}
              style={{ display: "none" }}
              onChange={onCVUpload}
            />
            <Button
              variant="contained"
              color="accent"
              component="span"
              onClick={() => cvFile.current?.click()}
            >
              تحميل السيرة الذاتية
            </Button>
          </div>
          {/* <Button variant="contained" color="accent" size="large">
            اشتراك premium
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default withAuth(Profile, Page, "الملف الشخصي");
