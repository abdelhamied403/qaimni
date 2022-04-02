import React, { useEffect, useRef, useState } from "react";
import JobLayout from "../../src/layout/Job";
import jobService from "../../src/services/job";
import { Button, Chip } from "@mui/material";
import Modal from "../../src/components/Modal";
import Input from "../../src/components/Input";
import userService from "../../src/services/user";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import withAuth from "../../src/components/HOC/withAuth";

const Job = (props) => {
  const router = useRouter();
  const { id } = router.query;

  const [job, setJob] = useState({});
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const user = useSelector((state) => state.user.user);
  const cvFile = useRef(null);

  const [form, setForm] = useState({
    name: user?.name,
    email: user?.email,
    phone: user?.phone,
    cv: user?.cv,
    new_cv: 0,
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    cv: "",
    new_cv: "",
  });

  const getJobs = async (id) => {
    const res = await jobService.getJob(id);
    setJob(res.data);
  };

  const onCVUpload = async () => {
    const file = cvFile.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = async function (e) {
      await userService.uploadCV(e.target.result);
      setForm({ ...form, cv: e.target.result });
    };
  };

  useEffect(() => {
    getJobs(id);
  }, [id]);

  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <h1>{job?.title}</h1>
          <Chip label={job?.type} color="primary" />
        </div>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => {
            setApplyModalOpen(true);
          }}
        >
          <span className="text-white">تقدم للوظيفة</span>
        </Button>
      </div>

      <p>
        {job?.country}, {job?.state}
      </p>
      <div className="flex flex-col">
        <div className="flex flex-wrap gap-2">
          <img className="w-8" src={job?.company_logo} alt="" />
          <p>{job?.company_name}</p>
        </div>
        <p className="text-gray-400 text-sm">{job?.created_at}</p>
      </div>

      {!job?.hide_salary && (
        <div className="flex flex-col flex-wrap gap-2">
          <div className="flex flex-wrap gap-4 items-center">
            <h2 className="text-primary font-extrabold">تفاصيل المرتب</h2>
            <span className="flex-1 border border-solid border-gray-200" />
          </div>

          <h4>
            من {job?.salary_range_from} الي {job?.salary_range_to}
          </h4>

          <p className="text-gray-400 text-sm">
            {job?.additional_salary_details}
          </p>
        </div>
      )}

      <div className="flex flex-wrap gap-4 items-center">
        <h2 className="text-primary font-extrabold">تفاصيل الوظيفة</h2>
        <span className="flex-1 border border-solid border-gray-200" />
      </div>
      <div dangerouslySetInnerHTML={{ __html: job?.job_description }} />
      <div className="flex flex-wrap gap-4 items-center">
        <h2 className="text-primary font-extrabold">المتطلبات</h2>
        <span className="flex-1 border border-solid border-gray-200" />
      </div>
      <div dangerouslySetInnerHTML={{ __html: job?.job_requirements }} />

      <div className="flex flex-wrap gap-4 items-center">
        <h2 className="text-primary font-extrabold">المتسوي</h2>
        <span className="flex-1 border border-solid border-gray-200" />
      </div>

      <p>
        <span className="font-extrabold">المتسوي الدراسي: </span>
        {job?.education_level}
      </p>
      <p>
        <span className="font-extrabold">المتسوي الوظيفي: </span>
        {job?.career_level}
      </p>

      {/* <pre>{JSON.stringify(Object.keys(job || {}), null, 2)}</pre> */}
      <Modal
        title={`تقدم لوظيفة ${job?.title}`}
        open={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
        action="تقديم"
        onSubmit={async () => {
          try {
            const res = await jobService.apply(job.id, form);
            setApplyModalOpen(false);
          } catch (error) {
            setErrors(error.errors);
          }
        }}
      >
        <div className="form flex flex-col gap-4 py-2">
          <Input
            required
            label="الاسم"
            name="name"
            value={form.name}
            setValue={setForm}
            error={errors?.name}
            setError={setErrors}
          />
          <Input
            required
            label="البريد الالكتروني"
            name="email"
            value={form.email}
            setValue={setForm}
            error={errors?.email}
            setError={setErrors}
          />
          <Input
            required
            label="الهاتف"
            name="phone"
            value={form.phone}
            setValue={setForm}
            error={errors?.phone}
            setError={setErrors}
          />

          <div className="actions">
            <input
              type="file"
              id="cv"
              ref={cvFile}
              style={{ display: "none" }}
              onChange={onCVUpload}
            />
            <Button
              variant="contained"
              color="accent"
              component="span"
              onClick={() => cvFile.current?.click()}
            >
              السيرة الذاتية
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default withAuth(Job, JobLayout, "الوظائف");
