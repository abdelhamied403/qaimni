import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const CategoryCard = (props) => {
  const slugger = () => props.title.split(" ").join("-");

  return (
    <Link href={`/categories/${props.id}-${slugger()}`} passHref>
      <div className="category-card border border-solid rounded-xl border-black group px-4">
        <div className="text-center">
          <Button fullWidth variant="default">
            <h3 className="group-hover:text-primary flex gap-2">
              <span className="">{props.title}</span>
              <span className="text-white text-sm m-auto px-2 font-bold bg-primary rounded-xl">
                {props.companies_count}
              </span>
            </h3>
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
