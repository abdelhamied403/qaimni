import {
  Button,
  Checkbox,
  FormControlLabel,
  Rating,
  Tabs,
  TextField,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Navbar from "../../../src/components/Navbar";

const Review = (props) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="page mx-24">
      <div className="review">
        <header>
          <Navbar />
        </header>
        <div className="head flex gap-4 items-center">
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
            <h1 className="m-0">جوجل</h1>
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
        <div className="content">
          <div className="rate">
            <h2>تقييم</h2>
            <Rating name="size-large" defaultValue={0} size="large" />
          </div>
          <div className="review">
            <h2>اكتب تعليقك</h2>
            <div className="my-4">
              <TextField className="w-full" label="تعليقك" multiline rows={4} />
            </div>
          </div>
          <div className="proof">
            <h2>اضف دليلك</h2>
            <div className="flex gap-4 my-2">
              <div className="box w-36 h-36 bg-gray-400"></div>
              <div className="box w-36 h-36 bg-gray-400"></div>
              <div className="box w-36 h-36 bg-gray-400"></div>
              <div className="box flex w-36 h-36 border border-solid border-gray-400">
                <h1 className="m-auto">+</h1>
              </div>
            </div>
          </div>
          <div className="checks my-8">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="ipsum dolor, sit amet consectetur adipisicing elit. Nam
              aliquam vel inventore delectus nobis, nostrum, assumenda, beatae
              recusandae quas quos atque dolor minima doloribus voluptatem nisi
              quaerat omnis perferendis"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="ipsum dolor, sit amet consectetur adipisicing elit. Nam
              aliquam vel inventore delectus nobis, nostrum, assumenda, beatae
              recusandae quas quos atque dolor minima doloribus voluptatem nisi
              quaerat omnis perferendis"
            />
          </div>

          <div className="flex gap-4">
            <Button variant="contained" color="primary" size="large">
              تقديم رأيك
            </Button>
            <Button variant="outlined" color="primary" size="large">
              الغاء
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
