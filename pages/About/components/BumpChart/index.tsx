import React from "react";
import { ResponsiveAreaBump } from "@nivo/bump";

export const DATA = [
  {
    id: "CTU_Assistant",
    data: [
      {
        x: 2014,
        y: 1,
      },
      {
        x: 2015,
        y: 1,
      },
      {
        x: 2016,
        y: 1,
      },
      {
        x: 2017,
        y: 1,
      },
      {
        x: 2018,
        y: 1,
      },
      {
        x: 2019,
        y: 1,
      },
      {
        x: 2020,
        y: 1,
      },
    ],
  },
  {
    id: "CTU_Degree",
    data: [
      {
        x: 2015,
        y: 1,
      },
      {
        x: 2016,
        y: 1,
      },
      {
        x: 2017,
        y: 1,
      },
      {
        x: 2018,
        y: 1,
      },
      {
        x: 2019,
        y: 1,
      },
    ],
  },

  {
    id: "Apple care",
    data: [
      {
        x: 2016,
        y: 1,
      },
      {
        x: 2017,
        y: 1,
      },
    ],
  },
  {
    id: "Metropolia Helsinki",
    data: [
      {
        x: 2017,
        y: 1,
      },
      {
        x: 2018,
        y: 0.99,
      },
    ],
  },
  {
    id: "Ataccama",
    data: [
      {
        x: 2018,
        y: 1,
      },
      {
        x: 2019,
        y: 0.98,
      },
      {
        x: 2020,
        y: 1,
      },
    ],
  },
];

// TODO: replace placeholder data with real one
const BumpChart = ({ data }: { data?: any }) => (
  <ResponsiveAreaBump
    data={data || DATA}
    margin={{ top: 40, right: 15, bottom: 40, left: 85 }}
    align={"start"}
    spacing={8}
    colors={{ scheme: "nivo" }}
    interpolation={"linear"}
    startLabel="id"
    endLabel={false}
    axisTop={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "",
      legendPosition: "middle",
      legendOffset: -36,
    }}
    axisBottom={false}
  />
);

export default BumpChart;
