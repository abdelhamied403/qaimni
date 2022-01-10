import React from 'react';
import { Button, Carousel } from 'antd';
import Slide from 'components/Slide';
import Navbar from 'components/Navbar';
import { Link } from 'react-router-dom';
import logo from 'assets/logo.svg';

const Home = (props) => {
  return (
    <div className="page">
      <div className="home relative">
        <div className="absolute top-0 z-10 w-full px-24 py-12">
          <Navbar />
        </div>
        <Carousel>
          <Slide img="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
            <h1 className="text-7xl font-bold text-white">قيمني</h1>
            <p className="max-w-4xl my-4">
              لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي
              الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان
              لوريم إيبسوم ولايزال المعيار للنص ... ولايزال المعيار للنص الشكلي
              منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف
              بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <Button type="primary" size="large">
                اقرأ المزيد
              </Button>
              <Button
                type="ghost"
                className="bg-transparent text-accent border-accent hover:text-accent hover:border-accent"
                size="large"
              >
                ابحث
              </Button>
            </div>
          </Slide>
          <Slide>text</Slide>
          <Slide>text</Slide>
        </Carousel>

        <section className="vision py-4">
          <div className="relative">
            <span className="bg-accent h-4/5 w-1/3 absolute top-12" />
            <div className="content max-w-2xl mx-24 relative z-10">
              <img
                className="w-64 h-72 object-cover"
                src="https://images.pexels.com/photos/9404648/pexels-photo-9404648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
              <div className="data -mt-12">
                <h1 className="text-left font-bold text-7xl mb-6">الرؤيه</h1>
                <p className="text-left">
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollitveniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mission py-4 -mt-64" style={{ direction: 'ltr' }}>
          <div className="relative">
            <span className="bg-primary h-4/5 w-1/3 absolute top-12" />
            <div className="content max-w-2xl mx-24 relative z-10">
              <img
                className="w-64 h-72 object-cover"
                src="https://images.pexels.com/photos/9404648/pexels-photo-9404648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
              <div className="data -mt-12">
                <h1 className="text-right font-bold text-7xl mb-6">الرساله</h1>
                <p className="text-right">
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollitveniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit
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
                <img
                  className="w-full h-96 object-cover"
                  src="https://images.pexels.com/photos/9404648/pexels-photo-9404648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />
              </div>
              <div className="data">
                <h1 className="font-bold text-7xl mb-6">من نحن</h1>
                <p className="">
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollitveniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="top-rated py-12 px-24">
          <h1 className="font-bold text-7xl mb-6">الشركات الاعلي تقييماً</h1>
          <Carousel slidesToShow={5} autoplay>
            <div className="px-4">
              <img
                src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
            </div>
            <div className="px-4">
              <img
                src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
            </div>
            <div className="px-4">
              <img
                src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
            </div>
            <div className="px-4">
              <img
                src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
            </div>
            <div className="px-4">
              <img
                src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
            </div>
            <div className="px-4">
              <img
                src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
            </div>
          </Carousel>
        </section>

        <footer className="bg-gray-900 py-4 px-24 text-white">
          <div className="flex justify-between items-center">
            <div className="menu flex gap-4">
              <Link className="text-lg" to="/">
                الرئيسية
              </Link>
              <Link className="text-lg" to="/">
                الاقسام
              </Link>
            </div>
            <div className="logo">
              <img className="w-48" src={logo} alt="" />
            </div>
            <div className="socials">socials</div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
