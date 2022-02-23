import { PhotoCamera } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Input,
  Rating,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withAuth from "../../../src/components/HOC/withAuth";
import Page from "../../../src/layout/Page";
import company from "../../../src/services/company";

const Review = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const [ratingTypes, setRatingTypes] = useState([]);
  const [companyData, setCompanyData] = useState();
  const [rateAs, setRateAs] = useState("employee");

  const [form, setForm] = useState({
    type: "employee",
    rate: 0,
    comment: "",
    recommended: 0,
    show_name: 0,
    types: {},
  });
  const [errors, setErrors] = useState({
    rate: "",
    comment: "",
    types: "",
  });

  const ratingAs = {
    employee: {
      name: "employee",
      value: "موظف",
    },
    client: {
      name: "client",
      value: "عميل",
    },
  };

  // FUTURE: File upload
  // const [files, setFiles] = useState([]);
  // const [reader, setReader] = useState();

  const getCompanyData = async (id) => {
    if (id) {
      const res = await company.getCompany(id);
      setCompanyData(res.data);
    }
  };
  const getRatingTypes = async (as) => {
    const res = await company.getRatingTypes(as);
    setRatingTypes(res.data);
  };

  useEffect(() => {
    // FUTURE: File upload
    // setReader(new FileReader());
  }, []);

  useEffect(() => {
    getCompanyData(id);
    if (rateAs) getRatingTypes(rateAs);
  }, [id, rateAs]);

  // FUTURE: File upload
  // const onFileUpload = (e) => {
  //   const file = e.target.files[0];
  //   const url = reader.readAsDataURL(file);

  //   reader.onloadend = function (e) {
  //     setFiles([...files, e.target.result]);
  //   };
  // };

  const onRateChange = (rating_type_id, rate) => {
    if (rating_type_id === 0) {
      setForm((prev) => ({
        ...prev,
        rate,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        types: {
          ...prev.types,
          [rating_type_id]: rate,
        },
      }));
    }
  };

  const submit = async () => {
    const types = Object.values(form.types).map((rate, idx) => ({
      rating_type_id: Object.keys(form.types)[idx],
      rate,
    }));
    try {
      Swal.fire({
        title: `هل انت متأكد من التقييم ك${ratingAs[form.type].value}`,
        text: "وموافق علي الشروط والاحكام",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "موافق",
        cancelButtonText: "رجوع",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await company.submitReview(id, { ...form, types });
          router.push(`/company/${id}`);
        }
      });
    } catch (error) {
      setErrors((prev) => ({ ...prev, ...error.errors }));
    }
  };

  return (
    <div className="mx-8 md:mx-12 lg:mx-24 my-12">
      <div className="head flex flex-wrap gap-4 items-center my-12">
        <div className="logo border border-solid border-gray-400 rounded-xl p-4">
          <img
            className="w-44 h-44 object-contain"
            src={companyData?.logo_url}
            alt=""
          />
        </div>
        <div className="info flex-1">
          <div className="flex flex-wrap justify-between items-start">
            <div className="info">
              <h1 className="m-0">{companyData?.name}</h1>
              <p>
                {companyData?.address} - {companyData?.phone}
              </p>
            </div>
          </div>
          <div className="rate">
            <Rating
              name="size-large"
              value={companyData?.rate || 0}
              size="large"
              readOnly
              precision={0.1}
            />
          </div>
          <p className="m-0">{companyData?.description}</p>
        </div>
      </div>
      <div className="content">
        <div className="rate flex flex-col gap-4 items-center">
          <div className="flex gap-2">
            <h2>تقييم كـ</h2>
            <ToggleButtonGroup
              value={rateAs}
              exclusive
              color="primary"
              variant="contained"
              onChange={(e) => {
                setRateAs(e.target.value);
                setForm((prev) => ({
                  ...prev,
                  type: e.target.value,
                }));
                setRatingTypes([]);
                setForm((prev) => ({
                  ...prev,
                  types: [],
                }));
              }}
            >
              {Object.values(ratingAs).map((type) => (
                <ToggleButton
                  key={type.name}
                  value={type.name}
                  disabled={rateAs === type.name}
                  style={{ padding: "0 30px" }}
                >
                  {type.value}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </div>
          <div className="flex gap-4 my-2 mx-auto">
            <p>تقييم عام</p>
            <Rating
              name="size-large"
              defaultValue={0}
              size="large"
              onChange={(e) => onRateChange(0, e.target.value)}
            />
          </div>
          {errors.types && <span className="text-red-400">{errors.rate}</span>}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-x-8">
            {ratingTypes.map((rateType) => (
              <div className="flex gap-8 my-2" key={rateType.id}>
                <p className="flex-1">{rateType.title}</p>
                <Rating
                  name="size-large"
                  defaultValue={0}
                  size="large"
                  onChange={(e) => onRateChange(rateType.id, e.target.value)}
                />
              </div>
            ))}
          </div>
          {errors.types && <span className="text-red-400">{errors.types}</span>}
          <FormControlLabel
            control={
              <Checkbox
                checked={form.recommended}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    recommended: +e.target.checked,
                  }))
                }
              />
            }
            label="هل ترشح هذه الشركه للمتقدمين؟"
          />
        </div>
        <div className="review my-8">
          <h2 className="text-center">اكتب تعليقك</h2>
          <div className="my-4">
            <TextField
              className="w-full"
              label="تعليقك"
              multiline
              rows={4}
              error={errors.comment}
              helperText={errors.comment}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  comment: e.target.value,
                }))
              }
            />
          </div>
        </div>

        {/* FUTURE: File upload */}
        {/* <div className="add-prove">
          <h2>اضف دليلك</h2>
          <div className="flex flex-wrap gap-4 my-2">
            <div className="images flex">
              {files?.map((file, idx) => (
                <img
                  className="w-36 h-36 object-cover"
                  src={file}
                  alt=""
                  key={idx}
                />
              ))}
            </div>
            <label htmlFor="prove">
              <div className="hidden">
                <Input
                  accept="image/*"
                  id="prove"
                  type="file"
                  onInput={onFileUpload}
                />
              </div>
              <div
                aria-label="upload picture"
                component="span"
                className="box flex w-36 h-36 border border-dashed border-gray-400"
              >
                <div className="m-auto">
                  <PhotoCamera color="primary" sx={{ fontSize: 48 }} />
                </div>
              </div>
            </label>
          </div>
        </div> */}

        <div className="flex gap-4">
          <FormControlLabel
            control={
              <Checkbox
                checked={form.show_name}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    show_name: +e.target.checked,
                  }))
                }
              />
            }
            label="اظهار اسمي"
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={submit}
          >
            تقديم رأيك
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={() => router.push(`/company/${id}`)}
          >
            الغاء
          </Button>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Review, Page, "تقييم");
