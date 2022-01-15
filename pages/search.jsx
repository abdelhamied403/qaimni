import React from "react";
import Input from "../src/components/Input";

const Search = (props) => {
  return (
    <div className="page mx-24 mt-12">
      <div className="search">
        <Input
          variant="standard"
          className="border-0 w-full"
          label="ابحث"
          InputProps={{
            disableUnderline: true,
          }}
        />
      </div>
    </div>
  );
};

export default Search;
