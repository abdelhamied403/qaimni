import { Box, Button, Rating, Tab, Tabs, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Comment from "../../src/components/Comment";
import Navbar from "../../src/components/Navbar";
import TabPanel from "../../src/components/TabPanel";
import CommentIcon from "@mui/icons-material/Comment";
import PaidIcon from "@mui/icons-material/Paid";
import WorkIcon from "@mui/icons-material/Work";
import SaleryCard from "../../src/components/SaleryCard";
import Link from "next/link";
import Page from "../../src/layout/Page";
import PlanCard from "../../src/components/PlanCard";
import company from "../../src/services/company";
import withAuth from "../../src/components/HOC/withAuth";

import PublicIcon from "@mui/icons-material/Public";
import SocialIcon from "../../src/components/SocialIcon";
import Reply from "../../src/components/Reply";
import Head from "next/head";

const Company = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const [currentTab, setCurrentTab] = useState(0);
  const [companyData, setCompanyData] = useState();
  const [companyReviews, setCompanyReviews] = useState();
  const [clientsReviews, setClientsReviews] = useState();

  const getCompanyData = async () => {
    const res = await company.getCompany(id);
    setCompanyData(res.data);
  };

  const getClientsReviews = async () => {
    const res = await company.getCompanyReviews(id, "client");
    setClientsReviews(res.data);
  };

  const getCompanyReviews = async () => {
    const res = await company.getCompanyReviews(id, "employee");
    setCompanyReviews(res.data);
  };

  useEffect(() => {
    if (id) {
      getCompanyData();
      getCompanyReviews();
      getClientsReviews();
    }
  }, [id]);

  const slugResolve = () => {
    const s = id?.split("-");
    s?.shift();
    return s?.join(" ");
  };

  return (
    <>
      <Head>
        <title>قيمني | {slugResolve()}</title>
      </Head>
      <div className="mx-8 md:mx-12 lg:mx-24 my-12">
        <div className="head flex flex-wrap gap-4 items-start my-12">
          <div className="logo border border-solid border-gray-400 rounded-xl p-4">
            <img
              className="w-44 h-44 object-contain"
              src={companyData?.logo_url}
              alt=""
            />
          </div>
          <div className="info flex-1">
            <div className="flex flex-wrap justify-between items-start">
              <div className="info">
                <h1 className="m-0 text-primary">{companyData?.name}</h1>
                <p>
                  {companyData?.address} - {companyData?.phone}
                </p>
                <div className="flex gap-2">
                  <p>
                    عدد الموظفين:{" "}
                    <span className="text-primary font-bold">
                      {companyData?.employee_numbers}
                    </span>
                  </p>
                </div>
              </div>
              <div className="actions flex flex-wrap my-4 gap-4">
                <Link href={`${id}/review`} passHref>
                  <Button variant="contained" color="primary" size="large">
                    تقديم رأيك
                  </Button>
                </Link>
                {!companyData?.verified && (
                  <Link href={`${id}/claim`} passHref>
                    <Button variant="contained" color="accent" size="large">
                      المطالبه بالشركه
                    </Button>
                  </Link>
                )}
              </div>
            </div>
            <Rating
              name="size-large"
              value={companyData?.rate || 0}
              size="large"
              readOnly
              precision={0.1}
            />
            <p className="mb-3">
              <span className="text-primary font-bold">
                {companyData?.recommended_count}
              </span>{" "}
              رشحوا هذه الشركه
            </p>

            <div className="socials flex flex-wrap gap-2">
              {companyData?.social_media.map((social, idx) => (
                <div
                  key={idx}
                  className="border border-solid border-gray-400 rounded-lg hover:border-primary hover:bg-primary transition-all"
                >
                  <a className="px-4 flex items-center gap-2" href={social.url}>
                    <SocialIcon name={social.name} />
                    <p>{social.name}</p>
                  </a>
                </div>
              ))}
              {companyData?.website_url && (
                <div className="border border-solid border-gray-400 rounded-lg hover:border-primary hover:bg-primary transition-all">
                  <a className="px-4" href={companyData?.website_url}>
                    <PublicIcon /> website
                  </a>
                </div>
              )}
            </div>

            <p className="m-0">{companyData?.description}</p>
          </div>
        </div>

        {/* <div className="flex gap-4 justify-center">
        <PlanCard></PlanCard>
        <PlanCard></PlanCard>
      </div> */}

        <div className="tabs">
          <div className="tabs flex justify-center">
            <Tabs value={currentTab} onChange={(_, val) => setCurrentTab(val)}>
              <Tab icon={<CommentIcon />} label="تقييمات الموظفين" index={0} />
              <Tab icon={<CommentIcon />} label="تقييمات العملاء" index={1} />
              {/* <Tab icon={<PaidIcon />} label="المرتبات" index={3} />
            <Tab icon={<WorkIcon />} label="الوظائف" index={4} /> */}
            </Tabs>
          </div>
          <div className="tabContent">
            <TabPanel value={currentTab} index={0}>
              {/* comments */}
              <div className="comments">
                <div className="title mb-8">
                  <h1>تقييمات</h1>
                </div>
                {companyReviews?.map((review) => (
                  <>
                    <Comment
                      {...review}
                      key={review.id}
                      reply={review.reply}
                      company={companyData?.name}
                    />
                  </>
                ))}
              </div>
            </TabPanel>
            <TabPanel value={currentTab} index={1} className="p-0">
              {/* comments */}
              <div className="comments">
                <div className="title mb-8">
                  <h1>تقييمات</h1>
                </div>
                {clientsReviews?.map((review) => (
                  <Comment
                    {...review}
                    key={review.id}
                    reply={review.reply}
                    company={companyData?.name}
                  />
                ))}
              </div>
            </TabPanel>
            <TabPanel value={currentTab} index={2}>
              <h1>المرتبات</h1>
              <SaleryCard />
              <SaleryCard />
              <SaleryCard />
              <SaleryCard />
            </TabPanel>
            <TabPanel value={currentTab} index={3}>
              <div className="jobCard">
                <div className="head flex justify-between">
                  <h1>Production Engineer</h1>
                  <div className="actions">
                    <Button variant="outlined" color="primary" size="large">
                      تقدم للوظيفه
                    </Button>
                  </div>
                </div>
                <div className="content">
                  <div className="company flex gap-4">
                    <div className="logo">
                      <img
                        className="w-24 h-24 object-cover"
                        src="https://images.pexels.com/photos/9404648/pexels-photo-9404648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                      />
                    </div>
                    <div className="info">
                      <div className="name flex items-center gap-3">
                        <h2>جوجل</h2>
                        <div className="rate">
                          <Rating
                            name="size-large"
                            defaultValue={2}
                            size="large"
                          />
                        </div>
                      </div>
                      <p>المعادي, مصر الجديده</p>
                      <p>54k$ - 87k$</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
          </div>
        </div>
      </div>
    </>
  );
};

Company.getInitialProps = (ctx) => {
  return {};
};

Company.Layout = Page;
Company.DisplayName = "شركه";
export default Company;
