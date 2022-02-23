import Link from "next/link";
import React from "react";

const ArticleCard = ({ id, image_url, title }) => {
  const slugger = () => title.split(" ").join("-");
  return (
    <div className="flex flex-col gap-8 cursor-pointer">
      <Link href={`/blog/${id}-${slugger()}`} passHref>
        <div className="article">
          <img className="w-full h-48 object-contain" src={image_url} alt="" />
          <div className="info ">
            <h2 className="title text-center">{title}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;
