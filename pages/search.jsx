import { SearchOutlined } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import CompanyCard from "../src/components/CompanyCard";
import Page from "../src/layout/Page";
import company from "../src/services/company";

const Search = (props) => {
  const searchInput = useRef();
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    searchInput.current.querySelector("input").focus();
  }, []);

  const searchCompanies = async () => {
    const res = await company.searchCompanies(query);
    setSearchResults(res.data.data);
  };

  useEffect(() => {
    searchCompanies();
  }, [query]);

  return (
    <div className="mx-8 md:mx-12 lg:mx-24 my-12">
      <div className="search-box my-8 font-bold" ref={searchInput}>
        <TextField
          variant="outlined"
          size="large"
          label="ابحث عن شخص شركه او مستشار"
          placeholder="ابحث عن شخص شركه او مستشار"
          className="w-full font-bold"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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
        {searchResults.map((result) => (
          <CompanyCard {...result} key={result.id} />
        ))}
      </div>
    </div>
  );
};

Search.Layout = Page;
export default Search;
