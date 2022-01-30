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

  const getCategory = async (id) => {
    const category = await categoryService.getCategory(id);
    const companies = await categoryService.getCategoryCompanies(id);
    setCategory(category.data);
    setCompanies(companies.data.data);
  };

  useEffect(() => {
    if (id) getCategory(id);
  }, [id]);

  return (
    <div className="category">
      <div className="mt-8 mx-24">
        <h1>{category?.title}</h1>
      </div>
      <div className="companies grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {companies.map((company) => (
          <CompanyCard {...company} key={company.id} />
        ))}
      </div>
    </div>
  );
};

Category.Layout = Page;
Category.DisplayName = "قسم";
export default Category;
