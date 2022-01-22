import { Box, Button, Rating, Tab, Tabs, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Comment from "../../src/components/Comment";
import Navbar from "../../src/components/Navbar";
import TabPanel from "../../src/components/TabPanel";
import CommentIcon from "@mui/icons-material/Comment";
import PaidIcon from "@mui/icons-material/Paid";
import WorkIcon from "@mui/icons-material/Work";
import SaleryCard from "../../src/components/SaleryCard";
import Link from "next/link";

const Company = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="mx-8 md:mx-12 lg:mx-24 my-12">
      <div className="head flex flex-wrap md:flex-nowrap gap-4 items-center">
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
          <div className="flex justify-between">
            <h1 className="m-0">جوجل</h1>
            <Link href={`${id}/review`} passHref>
              <Button variant="contained" color="primary" size="large">
                تقديم رأيك
              </Button>
            </Link>
          </div>
          <div className="rate">
            <Rating name="size-large" defaultValue={2} size="large" />
          </div>
          <p className="m-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
            aliquam vel inventore delectus nobis, nostrum, assumenda, beatae
            recusandae quas quos atque dolor minima doloribus voluptatem nisi
            quaerat omnis perferendis! Eveniet?
          </p>
        </div>
      </div>
      <div className="tabs">
        <div className="tabs flex justify-center">
          <Tabs value={currentTab} onChange={(_, val) => setCurrentTab(val)}>
            <Tab icon={<CommentIcon />} label="التقييمات" index={1} />
            <Tab icon={<PaidIcon />} label="المرتبات" index={2} />
            <Tab icon={<WorkIcon />} label="الوظائف" index={3} />
          </Tabs>
        </div>
        <div className="tabContent">
          <TabPanel value={currentTab} index={0}>
            {/* comments */}
            <div className="comments">
              <div className="title mb-8">
                <h1>
                  تقييمات <span className="text-sm font-normal">8.6 الف</span>
                </h1>
              </div>
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
            </div>
          </TabPanel>
          <TabPanel value={currentTab} index={1}>
            <h1>المرتبات</h1>
            <SaleryCard />
            <SaleryCard />
            <SaleryCard />
            <SaleryCard />
          </TabPanel>
          <TabPanel value={currentTab} index={2}>
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
                    <Image
                      width="100"
                      height="100"
                      className="object-cover"
                      src="https://images.pexels.com/photos/9404648/pexels-photo-9404648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt=""
                    ></Image>
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
          <div className="flex flex-wrap justify-between">
            <h1>هل تعمل لدي شركه جوجل</h1>
            <Link href={`${id}/review`} passHref>
              <Button variant="outlined" color="primary" size="large">
                تقديم رأيك
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
