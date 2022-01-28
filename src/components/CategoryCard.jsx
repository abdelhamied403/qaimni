import Link from "next/link";
import React from "react";

const CategoryCard = (props) => {
  return (
    <Link href={`/categories/${props.id}`} passHref>
      <div className="category-card">
        <div className="card relative w-72 h-48 rounded-lg overflow-hidden cursor-pointer">
          <img
            src={
              props.image_url ||
              "https://images.pexels.com/photos/9404648/pexels-photo-9404648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
            alt=""
          />
        </div>
        <h1 className="text-center">{props.title}</h1>
      </div>
    </Link>
  );
};

export default CategoryCard;
