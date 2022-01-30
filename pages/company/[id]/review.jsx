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
    types: {},
  });

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
    await company.submitReview(id, { ...form, types });
    router.push(`/company/${id}`);
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
        <div className="rate">
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
              <ToggleButton
                value="employee"
                disabled={rateAs === "employee"}
                style={{ padding: "0 30px" }}
              >
                موظف
              </ToggleButton>
              <ToggleButton
                value="client"
                disabled={rateAs === "client"}
                style={{ padding: "0 30px" }}
              >
                عميل
              </ToggleButton>
            </ToggleButtonGroup>
          </div>

          <div className="rate-types flex gap-2">
            <div className="types text-left font-bold">
              <div className="flex flex-col my-2">
                <p>تقييم عام</p>
              </div>
              {ratingTypes.map((rateType) => (
                <div className="flex flex-col my-2" key={rateType.id}>
                  <p>{rateType.title}</p>
                </div>
              ))}
            </div>
            <div className="rates">
              <div className="flex flex-col my-2">
                <Rating
                  name="size-large"
                  defaultValue={0}
                  size="large"
                  onChange={(e) => onRateChange(0, e.target.value)}
                />
              </div>
              {ratingTypes.map((rateType) => (
                <div className="flex flex-col my-2" key={rateType.id}>
                  <Rating
                    name="size-large"
                    defaultValue={0}
                    onChange={(e) => onRateChange(rateType.id, e.target.value)}
                    size="large"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="review">
          <h2>اكتب تعليقك</h2>
          <div className="my-4">
            <TextField
              className="w-full"
              label="تعليقك"
              multiline
              rows={4}
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
        <div className="checks my-8">
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

        <div className="flex gap-4">
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

Review.Layout = Page;
Review.DisplayName = "تقييم";
export default Review;
