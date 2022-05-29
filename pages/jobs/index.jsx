import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Collapse from "../../src/components/Collapse";
import FilterChecks from "../../src/components/FilterChecks";
import Page from "../../src/layout/Page";
import PublicIcon from "@mui/icons-material/Public";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import CategoryIcon from "@mui/icons-material/Category";
import { Badge, Chip, Pagination, TextField } from "@mui/material";
import job from "../../src/services/job";
import clsx from "clsx";
import JobCard from "../../src/components/JobCard";
import vocab from "../../src/services/vocab";
import { careerLevels } from "../../src/utils/data";

const Jobs = (props) => {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);
  const [pagination, setPagination] = useState();
  const [page, setPage] = useState(1);

  const countries = useSelector((state) => state.vocab.countries);
  const [states, setStates] = useState([]);
  const [countriesFilter, setCountriesFilter] = useState("");
  const [statesFilter, setStatesFilter] = useState("");
  const [careerLevel, setCareerLevel] = useState("");

  let timer = null;

  useEffect(() => {
    (async () => {
      const states = await vocab.getStates(countriesFilter);
      setStates(states.data);
    })();
  }, [countriesFilter]);

  useEffect(() => {
    (async () => {
      const res = await job.getAllJobs(page, {
        countriesFilter,
        statesFilter,
        careerLevel,
        query,
      });
      setPagination(res.data.pagination);
      setJobs(res.data.data);
    })();
  }, [page, countriesFilter, statesFilter, careerLevel, query]);

  return (
    <div className="jobs bg-gray-100 flex-1 flex flex-col">
      <div className="mx-4 lg:mx-24 flex-1 py-8">
        <div className="grid grid-cols-4 gap-8">
          <div className="filters col-span-1">
            <div className="flex flex-col gap-2">
              <div className="flex">
                <TextField
                  className="flex-1 bg-white rounded-xl"
                  type="search"
                  label="البحث"
                  placeholder="البحث..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <div className="card px-6 py-2">
                <Collapse name="الدوله" icon={<PublicIcon color="primary" />}>
                  <FilterChecks
                    name="الدوله"
                    filters={countries}
                    setFilter={setCountriesFilter}
                    active={countriesFilter}
                  />
                </Collapse>
              </div>
              <div className="card px-6 py-2">
                <Collapse name="المدينة" icon={<FmdGoodIcon color="primary" />}>
                  <FilterChecks
                    name="المدينة"
                    filters={states}
                    setFilter={setStatesFilter}
                    active={statesFilter}
                  />
                </Collapse>
              </div>
              <div className="card px-6 py-2">
                <Collapse
                  name="المستوي"
                  icon={<FactCheckIcon color="primary" />}
                >
                  <FilterChecks
                    name="المستوي"
                    filters={careerLevels}
                    setFilter={setCareerLevel}
                    active={careerLevel}
                  />
                </Collapse>
              </div>
            </div>
          </div>
          <div className="list col-span-3 flex flex-col gap-4">
            {jobs.map((job) => (
              <JobCard {...job} key={job.id} />
            ))}
            <div className="mx-auto">
              <Pagination
                page={page}
                onChange={(_, num) => setPage(num)}
                count={pagination?.total_pages || 0}
                variant="outlined"
                color="primary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Jobs.Layout = Page;
Jobs.DisplayName = "الوظائف";
export default Jobs;
