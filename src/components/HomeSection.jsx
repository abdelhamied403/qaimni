import React from "react";

const HomeSection = (props) => {
  return (
    <section className="vision py-4" dir={props.id % 2 === 0 ? "ltr" : "rtl"}>
      <div className="relative">
        <span
          className={`${
            props.id % 2 === 0 ? "bg-primary" : "bg-accent"
          } h-4/5 w-2/3 lg:w-1/3 absolute top-12`}
        />
        <div className="content max-w-2xl mx-24 relative z-10">
          <img
            className="w-60 h-64"
            src="https://images.pexels.com/photos/9404648/pexels-photo-9404648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <div className="data mt-4 md:-mt-12">
            <h1
              className={`${
                props.id % 2 === 0 ? "text-right" : "md:text-left"
              } font-bold text-4xl md:text-7xl mb-6`}
            >
              {props.infos_title}
            </h1>
            <p
              className={`${
                props.id % 2 === 0 ? "text-right" : "md:text-left"
              }`}
            >
              {props.infos_desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
