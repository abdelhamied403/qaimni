import React from "react";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

const Slide = (props) => {
  const router = useRouter();

  return (
    <div className="h-screen bg-gray-200 relative" dir="rtl">
      <div className="overlay bg-black bg-opacity-50 h-full w-full absolute top-0 z-10"></div>
      <img
        className="w-full h-full object-cover"
        src={props.image_url}
        alt=""
      />
      <div className="content absolute top-0 w-full h-full flex text-white px-12 z-10 md:px-24">
        <div className="my-auto">
          <h1 className="text-7xl font-bold text-white mb-2">
            {props.slider_title}
          </h1>
          <p className="max-w-4xl my-4">{props.slider_desc}</p>

          <div className="flex space-x-4 rtl:space-x-reverse">
            {props.link && (
              <Button
                variant="outlined"
                color="accent"
                size="large"
                onClick={() => router.push(props.link)}
              >
                اضغط هنا
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
