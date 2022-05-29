import React, { useEffect, useRef, useState } from "react";
import jobService from "../../src/services/job";
import { Button, Chip, Rating } from "@mui/material";
import Modal from "../../src/components/Modal";
import Input from "../../src/components/Input";
import userService from "../../src/services/user";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import clsx from "clsx";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "react-share";
import Link from "../../src/components/Link";
import Page from "../../src/layout/Page";
import Head from "next/head";

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

  const openApplyModal = () => {
    if (user) {
      setApplyModalOpen(true);
    } else {
      router.push("/auth/login");
    }
  };

  useEffect(() => {
    id && getJobs(id);
  }, [id]);

  return (
    <>
      <Head>
        <title> قيمني | وظيفة {job.title}</title>
        <meta itemProp="name" content={job.title} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": schemaType,
              name: job.title,
              about: "description",
              url: "url",
            }),
          }}
        />
      </Head>
      <div className="py-12 mx-4 lg:mx-24">
        <div className="flex items-center flex-wrap justify-between">
          <div className="flex items-center gap-4">
            <h1>{job?.title}</h1>
            <Chip label={job?.type} color="primary" />
          </div>
          <div className="share-buttons flex gap-4">
            <FacebookShareButton url={`https://qaimni.com/jobs/${id}`}>
              <FacebookIcon width={36} height={36} />
            </FacebookShareButton>
            <TwitterShareButton url={`https://qaimni.com/jobs/${id}`}>
              <TwitterIcon width={36} height={36} />
            </TwitterShareButton>
            <LinkedinShareButton url={`https://qaimni.com/jobs/${id}`}>
              <LinkedinIcon width={36} height={36} />
            </LinkedinShareButton>
            <WhatsappShareButton url={`https://qaimni.com/jobs/${id}`}>
              <WhatsappIcon width={36} height={36} />
            </WhatsappShareButton>
          </div>

          {job?.application_status || (
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={openApplyModal}
            >
              <span className="text-white">تقدم للوظيفة</span>
            </Button>
          )}
        </div>

        <p className="text-gray-400 text-sm">{job?.created_at}</p>
        <Link href={`/company/${job?.company_id}-${job?.company_name}`}>
          {job?.company_name}
        </Link>
        <Rating
          name="size-large"
          value={job?.company_rate || 0}
          size="large"
          readOnly
          precision={0.1}
        />

        <div className={clsx({ disabled: job?.status !== "open" })}>
          <p>
            {job?.country}, {job?.state}
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <h2 className="text-primary font-extrabold">التفاصيل</h2>
            <span className="flex-1 border border-solid border-gray-200" />
          </div>

          <div className="flex flex-col gap-2 my-4">
            <p className="flex items-center">
              <span className="text-sm w-32">المستوي الدراسي: </span>
              <span className="text-primary font-bold">
                {job?.education_level}
              </span>
            </p>
            <p className="flex items-center">
              <span className="text-sm w-32">المستوي الوظيفي: </span>
              <span className="text-primary font-bold">
                {job?.career_level}
              </span>
            </p>

            <p className="flex items-center">
              <span className="text-sm w-32">تفاصيل المرتب: </span>
              {job?.hide_salary === 0 ? (
                <span className="text-primary font-bold">
                  من {job?.salary_range_from} الي {job?.salary_range_to}
                  {job?.additional_salary_details && (
                    <span className="mx-2">
                      ({job?.additional_salary_details})
                    </span>
                  )}
                </span>
              ) : (
                <span className="text-primary font-bold">خاص</span>
              )}
            </p>
            <p className="flex items-center">
              <span className="text-sm w-32">سنوات الخبره: </span>
              <span className="text-primary font-bold">
                من {job?.experience_years_from} الي {job?.experience_years_to}
              </span>
            </p>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <h2 className="text-primary font-extrabold">الوصف</h2>
            <span className="flex-1 border border-solid border-gray-200" />
          </div>
          <div
            className="break-all"
            dangerouslySetInnerHTML={{ __html: job?.job_description }}
          />
          <div className="flex flex-wrap gap-4 items-center">
            <h2 className="text-primary font-extrabold">المتطلبات</h2>
            <span className="flex-1 border border-solid border-gray-200" />
          </div>
          <div
            className="break-all"
            dangerouslySetInnerHTML={{ __html: job?.job_requirements }}
          />
        </div>

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
      </div>
    </>
  );
};

Job.Layout = Page;
export default Job;
