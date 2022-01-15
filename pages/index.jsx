import Head from "next/head";
import Button from "@mui/material/Button";
import Navbar from "../src/components/Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "../src/components/Slide";
import Image from "next/image";

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
            <div className="absolute top-0 z-10 w-full px-24 py-12 pointer-events-none">
              <Navbar />
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
              <span className="bg-accent h-4/5 w-1/3 absolute top-12" />
              <div className="content max-w-2xl mx-24 relative z-10">
                <Image
                  width="256"
                  height="288"
                  className="object-cover"
                  src="https://images.pexels.com/photos/9404648/pexels-photo-9404648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />
                <div className="data -mt-12">
                  <h1 className="text-left font-bold text-7xl mb-6">الرؤيه</h1>
                  <p className="text-left">
                    لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية
                    هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور
                    النشر. كان لوريم إيبسوم ولايزال المعيار للنص ... ولايزال
                    المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة
                    مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن
                    كتيّب بمثابة دليل أو مرجع شكلي
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="mission py-4 -mt-64" style={{ direction: "ltr" }}>
            <div className="relative">
              <span className="bg-primary h-4/5 w-1/3 absolute top-12" />
              <div className="content max-w-2xl mx-24 relative z-10">
                <Image
                  width="256"
                  height="288"
                  className="object-cover"
                  src="https://images.pexels.com/photos/9404648/pexels-photo-9404648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />
                <div className="data -mt-12">
                  <h1 className="text-right font-bold text-7xl mb-6">
                    الرساله
                  </h1>
                  <p className="text-right">
                    لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية
                    هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور
                    النشر. كان لوريم إيبسوم ولايزال المعيار للنص ... ولايزال
                    المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة
                    مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن
                    كتيّب بمثابة دليل أو مرجع شكلي
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="about py-12">
            <div className="relative">
              <span className="bg-accent h-full w-2/5 absolute top-0" />
              <div className="content mx-24 relative z-10 grid grid-cols-2 gap-12">
                <div className="img py-12">
                  <Image
                    width="256"
                    height="288"
                    className="object-cover"
                    src="https://images.pexels.com/photos/9404648/pexels-photo-9404648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                  />
                </div>
                <div className="data">
                  <h1 className="font-bold text-7xl mb-6">من نحن</h1>
                  <p className="">
                    لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية
                    هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور
                    النشر. كان لوريم إيبسوم ولايزال المعيار للنص ... ولايزال
                    المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة
                    مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن
                    كتيّب بمثابة دليل أو مرجع شكلي
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="top-rated py-12 px-24">
            <h1 className="font-bold text-7xl mb-6">الشركات الاعلي تقييماً</h1>
          </section>
        </div>
      </div>
    </>
  );
}
