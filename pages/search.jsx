import React, { useEffect, useRef } from "react";
import CompanyCard from "../src/components/CompanyCard";
import Input from "../src/components/Input";

const Search = (props) => {
  const searchInput = useRef();

  useEffect(() => {
    searchInput.current.querySelector("input").focus();
  }, []);

  return (
    <div className="mx-8 md:mx-12 lg:mx-24 my-12">
      <div className="search-box my-8" ref={searchInput}>
        <Input
          variant="standard"
          size="large"
          autoFocus
          className="border-0 w-full font-bold"
          label="ابحث عن شخص شركه او مستشار..."
          InputProps={{
            disableUnderline: true,
            style: {
              fontSize: 48,
              fontWeight: 700,
            },
          }}
        />
      </div>
      <div className="results grid xl:flex xl:flex-col grid-cols-1 md:grid-cols-2 xl:grid-cols-none gap-8">
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
      </div>
    </div>
  );
};

export default Search;
