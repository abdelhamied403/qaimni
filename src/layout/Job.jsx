import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import jobService from "../../src/services/job";
import Page from "./Page";

const JobLayout = (props) => {
  const router = useRouter();
  const { id } = router.query;

  const [jobs, setJobs] = useState([]);

  const getJobs = async () => {
    const res = await jobService.getAllJobs(1);
    setJobs(res.data.data);
  };

  useEffect(() => {
    getJobs();
  }, []);

  const slugResolve = () => {
    const s = id?.split("-");
    s?.shift();
    return s?.join(" ");
  };

  return (
    <>
      <Page title={`وظيفة ${slugResolve()}`}>
        <div className="jobs mx-4 lg:mx-24 my-8">
          <div className="grid grid-cols-5 gap-8">
            <div className="col-span-5 xl:col-span-1 flex flex-col gap-4">
              {jobs.map((job, idx) => (
                <div key={job.id} className="cursor-pointer">
                  <Link href={`/jobs/${job.id}-${job.title}`} passHref>
                    <div
                      className={`flex flex-wrap items-center justify-between border border-solid border-gray-200 py-2 px-8 rounded-xl ${
                        id === `${job.id}-${job.title}` ? "bg-gray-200" : ""
                      }`}
                    >
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col">
                          <h2>{job.title}</h2>
                          <p className="text-gray-400 text-sm">
                            {job.created_at}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <img className="w-8" src={job.company_logo} alt="" />
                          <p>{job.company_name}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div className="col-span-5 xl:col-span-4 border border-solid border-gray-200 p-4 flex flex-col gap-4">
              {props.children}
            </div>
          </div>
        </div>
      </Page>
    </>
  );
};

export default JobLayout;
