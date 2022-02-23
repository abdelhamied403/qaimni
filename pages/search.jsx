import { SearchOutlined } from "@mui/icons-material";
import {
  Backdrop,
  Button,
  Fade,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Input from "../src/components/Input";
import React, { useEffect, useRef, useState } from "react";
import CompanyCard from "../src/components/CompanyCard";
import Page from "../src/layout/Page";
import company from "../src/services/company";
import InboxIcon from "@mui/icons-material/Inbox";
import categoryService from "../src/services/category";
import Modal from "../src/components/Modal";
import user from "../src/services/user";

const Search = (props) => {
  const searchInput = useRef();
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [categories, setCategories] = useState();
  const [category, setCategory] = useState();
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    address: "",
    website: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    address: "",
    website: "",
  });

  const getAllCategories = async () => {
    const res = await categoryService.getAllCategories();
    setCategories(res.data);
  };

  useEffect(() => {
    searchInput.current.querySelector("input").focus();
  }, []);

  const searchCompanies = async (p_query = query, p_category = category) => {
    const res = await company.searchCompanies(p_query, p_category);
    setSearchResults(res.data.data);
  };

  const submit = async () => {
    const res = await user.addNewCompany(form);
    setOpen(false);
  };

  useEffect(() => {
    searchCompanies();
    getAllCategories();
  }, []);

  return (
    <div className="mx-8 md:mx-12 lg:mx-24 my-12">
      <div
        className="search-box my-8 font-bold flex flex-wrap gap-4"
        ref={searchInput}
      >
        <div className="min-w-48 flex flex-1 lg:min-w-0">
          <TextField
            variant="outlined"
            size="large"
            label="ابحث عن شركه"
            placeholder="ابحث عن شركه"
            className="flex-1 font-bold"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              searchCompanies(e.target.value, category);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlined />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <FormControl className="w-56">
          <InputLabel>الاقسام</InputLabel>
          <Select
            value={category}
            label="Category"
            onChange={(e) => {
              setCategory(e.target.value);
              searchCompanies(query, e.target.value);
            }}
          >
            {categories?.map((category) => (
              <MenuItem value={category.id} key={category.id}>
                {category.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => searchCompanies()}
        >
          ابحث
        </Button>
      </div>
      <div className="results grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
        {searchResults.map((result) => (
          <CompanyCard {...result} key={result.id} />
        ))}
        {searchResults.length === 0 && (
          <div className="text-center col-span-3 bg-gray-100 py-24">
            <div className="text-7xl text-primary">
              <InboxIcon fontSize="inherit" />
            </div>
            <h4>لا يوجد اي شركات بهذا الاسم</h4>
            <div className="my-4">
              <Button
                variant="contained"
                color="accent"
                size="large"
                onClick={() => setOpen(true)}
              >
                اضف الشركه
              </Button>
            </div>
          </div>
        )}
      </div>

      <Modal
        title="اضافة شركه"
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={submit}
        action="حفظ"
      >
        <div className="flex flex-col gap-4 my-4">
          <Input
            required
            label="اسم الشركه"
            name="name"
            value={form.name}
            setValue={setForm}
            error={errors.name}
            setError={setErrors}
          />
          <Input
            required
            label="عنوان الشركه"
            name="address"
            value={form.address}
            setValue={setForm}
            error={errors.address}
            setError={setErrors}
          />
          <Input
            required
            label="رابط للشركه"
            name="website"
            value={form.website}
            setValue={setForm}
            error={errors.website}
            setError={setErrors}
          />
        </div>
      </Modal>
    </div>
  );
};

Search.Layout = Page;
Search.DisplayName = "البحث";
export default Search;
