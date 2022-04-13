import Page from "../src/layout/Page";
import Slider from "react-slick";
import Slide from "../src/components/Slide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import home from "../src/services/home";
import { useEffect, useState } from "react";
import HomeSection from "../src/components/HomeSection";
import CompanyCard from "../src/components/CompanyCard";

var settings = {
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  rtl: true,
  arrows: false,
  swipe: true,
};

const Home = () => {
  const [homeData, setHomeData] = useState();
  const [loading, setLoading] = useState(false);

  const getHomeData = async () => {
    setLoading(true);
    const res = await home.getHomeData();
    setLoading(false);
    setHomeData(res.data);
  };

  useEffect(() => {
    getHomeData();
  }, []);

  return (
    <>
      <header>
        <Slider {...settings}>
          {homeData?.sliders?.map((slide) => (
            <Slide {...slide} key={slide.id} />
          ))}
        </Slider>
      </header>

      <div className="mx-8">
        <div className="mx-auto flex flex-wrap items-stretch gap-12 max-w-7xl">
          {homeData?.home_data.map((section) => (
            <HomeSection {...section} key={section.id} />
          ))}
        </div>
      </div>

      <div className="top-rate py-24 px-12 md:px-24">
        <h1 className="font-bold text-3xl md:text-3xl mb-6">
          الشركات الاعلي تقييماً
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {homeData?.companies.map((company) => (
            <CompanyCard key={company.id} {...company} />
          ))}
        </div>
      </div>
      <div className="latest py-24 px-12 md:px-24">
        <h1 className="font-bold text-3xl md:text-3xl mb-6">
          الشركات المضافة حديثاً
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {homeData?.latest_companies.map((company) => (
            <CompanyCard key={company.id} {...company} />
          ))}
        </div>
      </div>
    </>
  );
};
Home.Layout = Page;
Home.DisplayName = "الرئيسيه";
export default Home;
