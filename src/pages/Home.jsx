import React from 'react';
import { Carousel } from 'antd';
import Slide from 'components/Slide';
import Navbar from 'components/Navbar';

const Home = (props) => {
  return (
    <div className="page">
      <div className="home relative">
        <div className="absolute top-0 z-10 w-full px-24 py-12">
          <Navbar></Navbar>
        </div>
        <Carousel>
          <Slide img="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
            <h1 className="text-7xl font-bold text-white my-4">قيمني</h1>
            <p className="max-w-4xl">
              لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي
              الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان
              لوريم إيبسوم ولايزال المعيار للنص ... ولايزال المعيار للنص الشكلي
              منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف
              بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي
            </p>
          </Slide>
          <Slide>text</Slide>
          <Slide>text</Slide>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
