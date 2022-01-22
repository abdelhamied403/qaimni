import React from "react";
import { Rating } from "@mui/material";
import Image from "next/image";
import Link from "./Link";

const CompanyCard = (props) => {
  return (
    <div className="company-card">
      <div className="flex flex-wrap xl:flex-nowrap items-center gap-8">
        <div className="logo">
          <Image
            width="369"
            height="256"
            className="object-cover"
            src="https://images.pexels.com/photos/9404648/pexels-photo-9404648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          ></Image>
        </div>
        <div className="info">
          <Link href="/company/1">
            <h1 className="title m-0">اسم الشركه</h1>
          </Link>
          <Rating name="size-large" defaultValue={2} size="large" />
          <p className="m-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laudantium, error? Expedita non amet aut porro optio blanditiis
            tenetur. Officia dolorem ducimus quis, consequuntur laboriosam
            deleniti ipsa eligendi odit accusantium sunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
