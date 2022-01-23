import { Button } from "@mui/material";
import React from "react";

const PlanCard = (props) => {
  return (
    <div className="plan-card">
      <div className="p-4 bg-gray-300 max-w-xs rounded-xl">
        <div className="flex justify-between">
          <h1>Pro</h1>
          <div className="price">
            <p className="text-bold">120$</p>
            <p>month</p>
          </div>
        </div>
        <div className="features">
          <ul>
            <li>plan feature</li>
            <li>
              plan featureplan featureplan featureplan featureplan featureplan
              featureplan featureplan feature
            </li>
            <li>plan feature</li>
            <li>plan feature</li>
          </ul>
        </div>
        <div className="action flex justify-center">
          <Button variant="outlined" color="primary" size="large">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
