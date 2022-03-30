import React, { useEffect } from "react";
import withAuth from "../../src/components/HOC/withAuth";
import Page from "../../src/layout/Page";
import jobService from "../../src/services/job";
import { useRouter } from "next/router";

const Jobs = (props) => {
  const router = useRouter();
  const init = async () => {
    const res = await jobService.getAllJobs(1);
    const job = res.data.data[0];
    router.push(`/jobs/${job.id}-${job.title}`);
  };
  useEffect(() => {
    init();
  }, []);

  return <div className="jobs mx-4 lg:mx-24 my-8"></div>;
};

export default withAuth(Jobs, Page, "الوظائف");
