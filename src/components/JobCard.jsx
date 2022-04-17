import { Chip } from "@mui/material";
import React from "react";
import Link from "./Link";

const JobCard = ({
  id,
  title,
  created_at,
  company_id,
  company_name,
  country,
  state,
  type,
  company_logo,
  job_description,
}) => {
  return (
    <div className="card p-6">
      <div className="card-head flex flex-wrap justify-between">
        <div className="breif">
          <Link href={`jobs/${id}-${title}`}>
            <h2>{title}</h2>
          </Link>
          <p>
            <small className="text-gray-400">{created_at}</small>
          </p>
          <p>
            <small className="font-black">
              <Link href={`company/${company_id}-${company_name}`}>
                {company_name}
              </Link>
            </small>
            {" - "}
            <small className="text-gray-400">
              {country}, {state}
            </small>
          </p>
          <Chip label={type} size="small" />
        </div>
        <div className="logo">
          <Link href={`company/${company_id}-${company_name}`}>
            <div className="cursor-pointer">
              <img className="w-12" src={company_logo} alt={company_name} />
            </div>
          </Link>
        </div>
      </div>
      <div className="card-body">
        <div
          className="truncate-2"
          dangerouslySetInnerHTML={{ __html: job_description }}
        />
        <Link className="text-primary" href={`jobs/${id}-${title}`}>
          المزيد
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
