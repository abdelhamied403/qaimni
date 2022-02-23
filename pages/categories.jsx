import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategoryCard from "../src/components/CategoryCard";
import Page from "../src/layout/Page";
import category from "../src/services/category";

const Categories = (props) => {
  const [categories, setCategories] = useState();

  const getAllCategories = async () => {
    const res = await category.getAllCategories();
    setCategories(res.data);
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <>
      <div className="px-12 my-12 md:px-24">
        <div className="flex flex-wrap gap-4">
          {categories?.map((category) => (
            <CategoryCard {...category} key={category.id} />
          ))}
        </div>
      </div>
    </>
  );
};

Categories.Layout = Page;
Categories.DisplayName = "الاقسام";
export default Categories;
