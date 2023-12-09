import React from "react";
import { DualAxes } from "@ant-design/plots";

const DemoDualAxes = () => {
  const data = [
    {
      year: "2019",
      value: 3,
      count: 10,
    },
    {
      year: "2020",
      value: 4,
      count: 4,
    },
    {
      year: "2021",
      value: 3.5,
      count: 5,
    },
    {
      year: "2022",
      value: 5,
      count: 5,
    },
    {
      year: "2023",
      value: 4.9,
      count: 4.9,
    },
    {
      year: "2025",
      value: 6,
      count: 35,
    },
    {
      year: "2026",
      value: 7,
      count: 7,
    },
    {
      year: "2028",
      value: 9,
      count: 1,
    },
    {
      year: "2029",
      value: 13,
      count: 20,
    },
  ];
  const config = {
    data: [data, data],
    xField: "year",
    yField: ["value", "count"],
    geometryOptions: [
      {
        geometry: "line",
        color: "#5B8FF9",
      },
      {
        geometry: "line",
        color: "#5AD8A6",
      },
    ],
  };
  return <DualAxes {...config} />;
};

export default DemoDualAxes;
