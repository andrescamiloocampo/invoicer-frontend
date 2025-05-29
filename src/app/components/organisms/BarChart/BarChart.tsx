import { type ReactElement } from "react";
import { BarChart } from "@mui/x-charts";

export const CustomBarChart = (): ReactElement => {
  return (
    <BarChart
      xAxis={[
        {
          id: "barCategories",
          data: ["January", "February", "March"],
          tickLabelStyle: {
            fill: "#ffffff",
            fontSize: 12,
          },
        },
      ]}
      yAxis={[
        {
          tickLabelStyle: {
            fill: "#ffffff",
            fontSize: 12,
          },
        },
      ]}
      series={[
        {
          data: [2, 5, 3],
          color: "#10b981",
        },
      ]}
      height={300}
      width={600}
      margin={{ left: 40, right: 20, top: 20, bottom: 40 }}
      barLabel="value"
      borderRadius={4}
      sx={{
        "& .MuiChartsAxis-line": {
          stroke: "#374151",
        },
        "& .MuiChartsAxis-tick": {
          stroke: "#374151",
        },
        "& .MuiChartsGrid-line": {
          stroke: "#1f2937",
          strokeDasharray: "3 3",
        },
        "& .MuiChartsLegend-series": {
          fill: "#ffffff",
        },
        "& .MuiBarElement-root": {
          maxWidth: "40px",
        },
      }}
      grid={{ horizontal: true }}
    />
  );
};
