import { Pagination } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CompanyCard from "../../src/components/CompanyCard";
import Page from "../../src/layout/Page";
import categoryService from "../../src/services/category";

const Category = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const [category, setCategory] = useState();
  const [companies, setCompanies] = useState([]);
  const [pagination, setPagination] = useState();
  const [page, setPage] = useState(1);

  const getCategory = async (id) => {
    const category = await categoryService.getCategory(id);
    const companies = await categoryService.getCategoryCompanies(id, page);
    setCategory(category.data);
    setCompanies(companies.data.data);
    setPagination(companies.data.pagination);
  };

  useEffect(() => {
    if (id) getCategory(id);
  }, [id, page]);

  return (
    <div className="category">
      <div className="my-8 mx-24">
        <h1 className="mb-6">{category?.title}</h1>
        <div className="companies grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {companies.map((company) => (
            <CompanyCard {...company} key={company.id} />
          ))}
        </div>

        <div className="flex justify-center my-12">
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
  );
};

Category.Layout = Page;
Category.DisplayName = "قسم";
export default Category;
