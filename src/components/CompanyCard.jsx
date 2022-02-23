import React from "react";
import { Rating } from "@mui/material";
// import Link from "./Link";
import Link from "next/link";

const CompanyCard = ({ id, logo_url, name, rate, description }) => {
  return (
    <div className="company-card">
      <Link href={`/company/${id}`}>
        <div className="flex flex-col gap-8 cursor-pointer group">
          <div className="logo border border-solid border-gray-400 rounded-xl">
            <img
              className="w-48 h-48 object-contain mx-auto"
              src={logo_url}
              alt=""
            />
          </div>
          <div className="info ">
            <h1 className="title truncate m-0 group-hover:text-primary text-xl mb-2">
              {name}
            </h1>
            {/* <Link href={`/company/${id}`} className="hover:text-primary">
            </Link> */}
            <Rating
              name="size-large"
              defaultValue={rate || 0}
              size="large"
              readOnly
              precision={0.1}
            />
            <p className="m-0 clamp-3" style={{ minHeight: "90px" }}>
              {description}
            </p>
          </div>
        </div>
      </Link>
      <hr className="block md:hidden" />
    </div>
  );
};

export default CompanyCard;
