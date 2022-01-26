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
      {loading && (
        <>
          <Spinner fullPage />
        </>
      )}
      {!loading && (
        <>
          <header>
            <Slider {...settings}>
              {homeData?.sliders?.map((slide) => (
                <Slide {...slide} key={slide.id} />
              ))}
            </Slider>
          </header>

          {homeData?.home_data.map((section) => (
            <HomeSection {...section} key={section.id} />
          ))}

          <MostRatedCompanies companies={homeData?.companies} />
        </>
      )}
    </>
  );
};
Home.Layout = Page;
export default Home;
