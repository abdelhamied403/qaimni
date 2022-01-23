import { Rating } from "@mui/material";
import Image from "next/image";
import React from "react";

const Comment = (props) => {
  return (
    <div className="comment border border-solid border-gray-400 my-8 px-8 py-4 rounded-lg">
      <div className="flex gap-4">
        <div className="head ">
          <img
            className="w-16 h-16 object-cover rounded-md"
            src="https://images.pexels.com/photos/9404648/pexels-photo-9404648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
        </div>
        <div className="content">
          <div className="head flex justify-between">
            <div className="username">
              <h3>Ahmed</h3>
            </div>
            <div className="rate">
              <Rating name="size-large" defaultValue={2} size="large" />
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            repellat maiores vitae molestiae laudantium. Perspiciatis,
            obcaecati? Totam, ipsum aliquid accusantium, sapiente unde et nihil
            blanditiis, qui culpa quisquam at inventore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
