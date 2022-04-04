import React from "react";
import JobLayout from "../../src/layout/Job";
import WorkIcon from "@mui/icons-material/Work";

const Jobs = (props) => {
  return (
    <div className="jobs mx-4 lg:mx-24 my-8 flex-1 flex">
      <div className="m-auto flex flex-col items-center text-gray-400">
        <WorkIcon sx={{ fontSize: 72 }}></WorkIcon>
        <h1>اختر وظيفة لعرضها</h1>
      </div>
    </div>
  );
};

Jobs.Layout = JobLayout;
Jobs.DisplayName = "الوظائف";
export default Jobs;
