import Image from "next/image";
import React from "react";

const CategoryCard = (props) => {
  return (
    <div className="category-card">
      <div className="card relative w-72 h-48 rounded-lg overflow-hidden cursor-pointer">
        <img
          src="https://images.pexels.com/photos/9404648/pexels-photo-9404648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />

        <div className="overlay w-full h-full opacity-0 hover:opacity-100 transition bg-white bg-opacity-40 absolute top-0 flex">
          <div className="m-auto">
            <h1 className="title">قسم 1</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
