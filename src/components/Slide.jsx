import Image from "next/image";
import React from "react";

const Slide = (props) => {
  return (
    <div className="h-screen bg-gray-200 relative" dir="rtl">
      <div className="overlay bg-black bg-opacity-50 h-full w-full absolute top-0 z-10"></div>
      <Image layout="fill" objectFit="cover" src={props.img} alt="" />
      <div className="content absolute top-0 w-full h-full flex text-white px-24 z-10">
        <div className="my-auto">{props.children}</div>
      </div>
    </div>
  );
};

export default Slide;
