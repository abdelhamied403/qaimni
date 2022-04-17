import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const FilterChecks = ({ name, filters, setFilters }) => {
  const [query, setQuery] = useState("");
  const [filteredChecks, setFilteredChecks] = useState(filters);

  const onFilterCheck = (event, id) => {
    const { checked } = event.target;

    let newFilters = filters.map((filter) => {
      if (filter.id === id) {
        return { ...filter, checked };
      }
      return filter;
    });

    setFilters(newFilters);
  };
  const onAllFilterCheck = (event) => {
    const { checked } = event.target;
    setFilters(filters.map((f) => ({ ...f, checked })));
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
              {!query && (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={filters.every((f) => f.checked)}
                      onChange={onAllFilterCheck}
                      indeterminate={
                        !filters.every((f) => f.checked) &&
                        filters.some((f) => f.checked)
                      }
                      name="all"
                    />
                  }
                  label="الكل"
                />
              )}
              <div className="pr-6">
                {filteredChecks.map((filter) => (
                  <FormControlLabel
                    key={filter.id}
                    control={
                      <Checkbox
                        checked={filter.checked}
                        onChange={(e) => onFilterCheck(e, filter.id)}
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
