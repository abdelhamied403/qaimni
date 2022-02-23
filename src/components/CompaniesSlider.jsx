import { useRouter } from "next/router";
import React, { useState } from "react";
import Slider from "react-slick";

const CompaniesSlider = ({ title, companies }) => {
  const router = useRouter();
  const [dragging, setDragging] = useState(false);
  return (
    <section className="top-rated py-24 px-12 md:px-24">
      <h1 className="font-bold text-3xl md:text-3xl mb-6">{title}</h1>
      <Slider
        className="multi"
        slidesToShow={companies?.length > 5 ? 5 : 2}
        slidesToScroll={3}
        rtl
        autoplay
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
        beforeChange={() => setDragging(true)}
      >
        {companies?.map((company) => (
          <div className="slide text-center" key={company.id}>
            <div
              className="cursor-pointer w-72 h-72 p-8 mx-auto"
              onClick={(e) => {
                if (!dragging) {
                  e.preventDefault();
                  router.push(`https://qaimni.com/company/${company.id}`);
                }
                setDragging(false);
              }}
            >
              <img
                className="w-full h-full object-contain object-center"
                src={company.logo_url}
                alt=""
              />
              {company.name}
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CompaniesSlider;
