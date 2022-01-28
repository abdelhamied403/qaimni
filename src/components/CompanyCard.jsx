import React from "react";
import { Rating } from "@mui/material";
import Link from "./Link";

const CompanyCard = ({ id, logo_url, name, rate, description }) => {
  return (
    <div className="company-card">
      <div className="flex flex-col gap-8">
        <div className="logo">
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
          <p className="m-0">{description}</p>
        </div>
      </div>
      <hr className="block md:hidden" />
    </div>
  );
};

export default CompanyCard;
