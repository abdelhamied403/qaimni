import React from "react";

const Reply = ({ company, text, created_at }) => {
  return (
    <div className="reply border border-solid border-gray-400 my-8 px-8 py-4 rounded-lg">
      <div className="content flex-1">
        <div className="head flex flex-wrap justify-between">
          <h3>{company}</h3>
          <p className="text-sm">{created_at}</p>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Reply;
