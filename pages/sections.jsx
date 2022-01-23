import { Pagination } from "@mui/material";
import React from "react";
import CategoryCard from "../src/components/CategoryCard";
import Page from "../src/layout/Page";

const Sections = (props) => {
  return (
    <>
      <div className="px-12 mt-12 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
        <div className="pagination my-8 flex justify-center">
          <Pagination count={10} shape="rounded" />
        </div>
      </div>
    </>
  );
};

Sections.Layout = Page;
export default Sections;
