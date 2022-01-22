import React from "react";
import { Button } from "@mui/material";

const SaleryCard = (props) => {
  return (
    <div className="saleryCard border border-solid border-gray-400 px-8 py-4 rounded-lg my-8">
      <div className="head flex flex-wrap justify-between">
        <h1>Production Engineer</h1>
        <div className="actions">
          <Button variant="outlined" color="primary" size="large">
            الوظائف المتاحه
          </Button>
        </div>
      </div>
      <div className="content">
        <div className="flex flex-wrap justify-between">
          <div className="avgSalery text-gray-400">
            <h2>
              123,200$ <span>/yr</span>
            </h2>
            <p>Avg. Salery</p>
          </div>
          <div className="baseSalery text-gray-400">
            <h2>
              103,200$ <span>/yr</span>
            </h2>
            <p>Base Salery</p>
          </div>
          <div className="extraSalery text-gray-400">
            <h2>
              23,200$ <span>/yr</span>
            </h2>
            <p>Extra Salery</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleryCard;
