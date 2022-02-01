import React from "react";

const HomeSection = ({ infos_key, infos_title, infos_desc }) => {
  return (
    <div className="py-4 flex-1">
      <div className="bg-gray-200 rounded-xl p-12 text-center shadow  h-full">
        <img className="w-60 mx-auto" src={`/assets/${infos_key}.png`} alt="" />
        <h1>{infos_title}</h1>
        <p>{infos_desc}</p>
      </div>
    </div>
  );
};

export default HomeSection;
