import React from "react";
import { Rating } from "@mui/material";
import Link from "./Link";

const CompanyCard = ({ id, logo_url, name, rate, description }) => {
  return (
    <div className="company-card text-center">
      <Link href={`/company/${id}`} className="hj">
        <div className="flex flex-col gap-8">
          <div className="logo border border-solid border-gray-400 rounded-xl">
            <img className="w-48 h-48 object-contain" src={logo_url} alt="" />
          </div>
          <div className="info ">
            <Link href={`/company/${id}`}>
              <h1 className="title m-0">{name}</h1>
            </Link>
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
