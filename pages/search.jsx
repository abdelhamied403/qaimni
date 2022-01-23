import { SearchOutlined } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import React, { useEffect, useRef } from "react";
import CompanyCard from "../src/components/CompanyCard";
import Input from "../src/components/Input";
import Page from "../src/layout/Page";

const Search = (props) => {
  const searchInput = useRef();

  useEffect(() => {
    searchInput.current.querySelector("input").focus();
  }, []);

  return (
    <div className="mx-8 md:mx-12 lg:mx-24 my-12">
      <div className="search-box my-8 font-bold" ref={searchInput}>
        <Input
          variant="outlined"
          size="large"
          label="ابحث عن شخص شركه او مستشار"
          placeholder="ابحث عن شخص شركه او مستشار"
          className="w-full font-bold"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlined />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className="results grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
      </div>
    </div>
  );
};

Search.Layout = Page;
export default Search;
