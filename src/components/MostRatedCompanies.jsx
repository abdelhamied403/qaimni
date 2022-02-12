import { useRouter } from "next/router";
import React from "react";
import Slider from "react-slick";

const MostRatedCompanies = (props) => {
  const router = useRouter();
  return (
    <section className="top-rated py-24 px-12 md:px-24">
      <h1 className="font-bold text-3xl md:text-3xl mb-6">
        الشركات الاعلي تقييماً
      </h1>
      <Slider
        className="multi"
        slidesToShow={props.companies > 5 ? 5 : 3}
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
      >
        {props.companies?.map((company) => (
          <div className="slide text-center" key={company.id}>
            <div
              className="cursor-pointer"
              onMouseUpCapture={() => router.push(`/company/${company.id}`)}
            >
              <img
                className="w-72 h-72 object-contain object-center p-8 mx-auto"
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

export default MostRatedCompanies;
