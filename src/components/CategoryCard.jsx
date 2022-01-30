import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const CategoryCard = (props) => {
  return (
    <Link href={`/categories/${props.id}`} passHref>
      <div className="category-card border border-solid rounded-xl border-black group">
        <div className="text-center">
          <Button fullWidth variant="default">
            <h1 className="group-hover:text-primary">{props.title}</h1>
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
