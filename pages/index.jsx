import Page from "../src/layout/Page";
import Slider from "react-slick";
import Slide from "../src/components/Slide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import home from "../src/services/home";
import { useEffect, useState } from "react";
import Spinner from "../src/components/Spinner";
import HomeSection from "../src/components/HomeSection";
import MostRatedCompanies from "../src/components/MostRatedCompanies";
import CompaniesSlider from "../src/components/CompaniesSlider";

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

      <CompaniesSlider
        title="الشركات الاعلي تقييماً"
        companies={homeData?.companies}
      />
      <CompaniesSlider
        title="الشركات المضافة حديثاً"
        companies={homeData?.latest_companies}
      />
    </>
  );
};
Home.Layout = Page;
Home.DisplayName = "الرئيسيه";
export default Home;
