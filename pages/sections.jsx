import { Pagination } from "@mui/material";
import Image from "next/image";
import React from "react";
import CategoryCard from "../src/components/CategoryCard";
import Navbar from "../src/components/Navbar";

const Sections = (props) => {
  return (
    <>
      <div className="px-12 md:px-24">
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

export default Sections;
