import { Rating } from "@mui/material";
import React from "react";
import ForumIcon from "@mui/icons-material/Forum";

const Comment = ({ comment, created_at, rate, types }) => {
  return (
    <div className="comment border border-solid border-gray-400 my-8 px-8 py-4 rounded-lg">
      <div className="flex gap-4">
        <div className="head text-5xl">
          <ForumIcon />
        </div>
        <div className="content flex-1">
          <div className="head flex justify-between">
            <div className="username">
              <h3>التقييم العام</h3>
              <Rating
                name="size-large"
                defaultValue={rate}
                size="large"
                readOnly
                precision={0.1}
              />
              <p className="text-sm">{created_at}</p>
            </div>
            <div className="rate flex flex-col">
              {types?.map((type) => (
                <div
                  className="rating flex items-center gap-2 justify-end"
                  key={type.id}
                >
                  <p className="text-sm">{type.title}</p>
                  <Rating
                    name="size-large"
                    defaultValue={type.rate}
                    size="large"
                    readOnly
                    precision={0.1}
                  />
                </div>
              ))}
            </div>
          </div>
          <p>{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
