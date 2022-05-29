import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const FilterChecks = ({ name, filters, setFilter, active }) => {
  const [query, setQuery] = useState("");
  const [filteredChecks, setFilteredChecks] = useState(filters);

  const handleCheck = (id) => {
    setFilter(id === active ? "" : id);
  };

  useEffect(() => {
    setFilteredChecks(filters.filter((f) => f.name.includes(query)));
  }, [query, filters]);

  return (
    <div className="filter-checks mt-4">
      <div className="flex flex-col">
        <TextField
          size="small"
          className="flex-1"
          type="search"
          placeholder={name}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="filters">
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend">اختر {name}</FormLabel>
            <FormGroup>
              <div className="pr-6 flex flex-col gap-2">
                {filters.map((filter) => (
                  <FormControlLabel
                    key={filter.id}
                    control={
                      <Checkbox
                        checked={filter.id === active}
                        onChange={() => handleCheck(filter.id)}
                        name={filter.id}
                      />
                    }
                    label={filter.name}
                  />
                ))}
                {!filteredChecks.length && (
                  <div className="text-red-500">لا يوجد نتائج</div>
                )}
              </div>
            </FormGroup>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default FilterChecks;
