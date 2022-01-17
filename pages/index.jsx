import Head from "next/head";
import Button from "@mui/material/Button";
import Navbar from "../src/components/Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "../src/components/Slide";
import Image from "next/image";
import Link from "next/link";
import logo from "../src/assets/logo.svg";

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

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="page">
        <div className="home">
          <header>
            <div className="absolute top-0 z-10 w-full px-12 md:px-24 py-12 pointer-events-none">
              <Navbar dark />
            </div>

            <Slider {...settings}>
              <Slide img="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
                <h1 className="text-7xl font-bold text-white">قيمني</h1>
                <p className="max-w-4xl my-4">
                  لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية
                  هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.
                  كان لوريم إيبسوم ولايزال المعيار للنص ... ولايزال المعيار للنص
                  الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة
                  من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل
                  أو مرجع شكلي
                </p>
                <div className="flex space-x-4 rtl:space-x-reverse">
                  <Button variant="contained" color="primary" size="large">
                    اقرأ المزيد
                  </Button>
                  <Button variant="outlined" color="accent" size="large">
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
                <Image
                  width="256"
                  height="288"
                  className="object-cover"
                  src="https://images.pexels.com/photos/9404648/pexels-photo-9404648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />
                <div className="data mt-4 md:-mt-12">
                  <h1 className="md:text-left font-bold text-4xl md:text-7xl mb-6">
                    الرؤيه
                  </h1>
                  <p className="md:text-left">
                    الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.
                    كان لوريم إيبسوم ولايزال المعيار للنص ... ولايزال المعيار
                    للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص
                    مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب
                    بمثابة دليل أو مرجع شكلي{" "}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section
            className="mission py-4 xl:-mt-64"
            style={{ direction: "ltr" }}
          >
            <div className="relative">
              <span className="bg-primary h-4/5 w-2/3 lg:w-1/3 absolute top-12" />
              <div className="content max-w-2xl mx-24 relative z-10">
                <img
                  className="w-64 h-72 object-cover"
                  src="https://images.pexels.com/photos/9404648/pexels-photo-9404648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />
                <div className="data mt-4 md:-mt-12">
                  <h1 className="text-right font-bold text-4xl md:text-7xl mb-6">
                    الرساله
                  </h1>
                  <p className="text-right">
                    الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.
                    كان لوريم إيبسوم ولايزال المعيار للنص ... ولايزال المعيار
                    للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص
                    مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب
                    ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت
                    مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص،
                    لتكوّن كتيّب بمثابة دليل أو مرجع شكلي{" "}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="about py-12">
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
                  <h1 className="font-bold text-4xl md:text-7xl mb-6">
                    من نحن
                  </h1>
                  <p className="">
                    ولايزال المعيا ولايزال المعيار للنص الشكلي منذ القرن الخامس
                    عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي
                    أخذتها من نص، لتكوّن كتيّب ولايزال المعيار للنص الشكلي منذ
                    القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من
                    الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب ولايزال
                    المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة
                    مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن
                    كتيّب نص، لتكوّن كتيّب
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
              <div className="relative h-36 object-cover">
                <Image
                  layout="fill"
                  src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />
              </div>
              <div className="relative h-36 object-cover">
                <Image
                  layout="fill"
                  src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />
              </div>
              <div className="relative h-36 object-cover">
                <Image
                  layout="fill"
                  src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />
              </div>
              <div className="relative h-36 object-cover">
                <Image
                  layout="fill"
                  src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />
              </div>
              <div className="relative h-36 object-cover">
                <Image
                  layout="fill"
                  src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />
              </div>
              <div className="relative h-36 object-cover">
                <Image
                  layout="fill"
                  src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />
              </div>
            </Slider>
          </section>

          <footer className="bg-gray-900 py-4 px-12 md:px-24 text-white">
            <div className="flex justify-between items-center">
              <div className="menu flex gap-4">
                <Link className="text-lg" href="/">
                  الرئيسية
                </Link>
                <Link className="text-lg" href="/">
                  الاقسام
                </Link>
              </div>
              <div className="logo">
                <div className="w-24">
                  <Image src={logo} alt="" />
                </div>
              </div>
              <div className="socials">socials</div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
