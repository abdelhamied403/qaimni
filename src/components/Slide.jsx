import React from 'react';

const Slide = (props) => {
  return (
    <div className="h-screen bg-red-200 relative" style={{ direction: 'rtl' }}>
      <div className="overlay bg-black bg-opacity-50 h-full w-full absolute top-0"></div>
      <img src={props.img} alt="" />
      <div className="content absolute top-0 w-full h-full flex text-white px-24">
        <div className="my-auto">{props.children}</div>
      </div>
    </div>
  );
};

export default Slide;
