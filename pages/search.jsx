import React from "react";
import CompanyCard from "../src/components/CompanyCard";
import Input from "../src/components/Input";

const Search = (props) => {
  return (
    <div className="page mx-24 mt-12">
      <div className="search">
        <div className="search-box my-8">
          <Input
            variant="standard"
            size="large"
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
        <div className="results">
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
        </div>
      </div>
    </div>
  );
};

export default Search;
