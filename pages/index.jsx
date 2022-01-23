/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import Page from "../src/layout/Page";
import Button from "@mui/material/Button";
import Slider from "react-slick";
import Slide from "../src/components/Slide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  rtl: true,
  arrow: false,
  swipe: false,
};

const Home = () => {
  const router = useRouter();

  return (
    <>
      <header>
        <Slider {...settings}>
          <Slide img="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
            <h1 className="text-7xl font-bold text-white mb-2">قيمني</h1>
            <p className="max-w-4xl my-4">
              لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي
              الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان
              لوريم إيبسوم ولايزال المعيار للنص ... ولايزال المعيار للنص الشكلي
              منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف
              بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <Button variant="contained" color="primary" size="large">
                <span className="text-white">اقرأ المزيد</span>
              </Button>
              <Button
                variant="outlined"
                color="accent"
                size="large"
                onClick={() => router.push("/search")}
              >
                ابحث
              </Button>
            </div>
          </Slide>
        </Slider>
      </header>

      <section className="vision py-4">
        <div className="relative">
          <span className="bg-accent h-4/5 w-2/3 lg:w-1/3 absolute top-12" />
          <div className="content max-w-2xl mx-24 relative z-10">
            <img
              className="w-60 h-64"
              src="https://images.pexels.com/photos/9404648/pexels-photo-9404648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
            <div className="data mt-4 md:-mt-12">
              <h1 className="md:text-left font-bold text-4xl md:text-7xl mb-6">
                الرؤيه
              </h1>
              <p className="md:text-left">
                الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان
                لوريم إيبسوم ولايزال المعيار للنص ... ولايزال المعيار للنص
                الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة
                من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو
                مرجع شكلي{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mission py-4 xl:-mt-48" style={{ direction: "ltr" }}>
        <div className="relative">
          <span className="bg-primary h-4/5 w-2/3 lg:w-1/3 absolute top-12" />
          <div className="content max-w-2xl mx-24 relative z-10">
            <img
              className="w-60 h-64"
              src="https://images.pexels.com/photos/9404648/pexels-photo-9404648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />

            <div className="data mt-4 md:-mt-12">
              <h1 className="text-right font-bold text-4xl md:text-7xl mb-6">
                الرساله
              </h1>
              <p className="text-right">
                الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان
                لوريم إيبسوم ولايزال المعيار للنص ... ولايزال المعيار للنص
                الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة
                من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب ولايزال المعيار
                للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص
                مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة
                دليل أو مرجع شكلي{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about py-12 mt-12">
        <div className="relative">
          <span className="bg-accent h-4/5 md:h-full w-3/5 md:w-2/5 absolute top-0" />
          <div className="content mx-24 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-12">
            <div className="img py-12">
              <img
                className="w-full h-96 object-cover"
                src="https://images.pexels.com/photos/9404648/pexels-photo-9404648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
            </div>
            <div className="data">
              <h1 className="font-bold text-4xl md:text-7xl mb-6">من نحن</h1>
              <p className="">
                ولايزال المعيا ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر
                عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها
                من نص، لتكوّن كتيّب ولايزال المعيار للنص الشكلي منذ القرن الخامس
                عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي
                أخذتها من نص، لتكوّن كتيّب ولايزال المعيار للنص الشكلي منذ القرن
                الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل
                عشوائي أخذتها من نص، لتكوّن كتيّب نص، لتكوّن كتيّب
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="top-rated py-12 px-12 md:px-24">
        <h1 className="font-bold text-4xl md:text-7xl mb-6">
          الشركات الاعلي تقييماً
        </h1>
        <Slider
          className="multi"
          slidesToShow={5}
          rtl
          autoplay
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 425,
              settings: {
                slidesToShow: 1,
              },
            },
          ]}
        >
          <img
            src="https://images.pexels.com/photos/9404648/pexels-photo-9404648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/9404648/pexels-photo-9404648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/9404648/pexels-photo-9404648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/9404648/pexels-photo-9404648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/9404648/pexels-photo-9404648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/9404648/pexels-photo-9404648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/9404648/pexels-photo-9404648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
        </Slider>
      </section>
    </>
  );
};
Home.Layout = Page;
export default Home;
