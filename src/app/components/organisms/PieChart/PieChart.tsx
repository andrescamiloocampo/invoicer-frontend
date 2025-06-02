import { type ReactElement } from "react";
import { PieChart } from "@mui/x-charts";
import type { PieChartModel } from "./PieChart.model";

export const CustomPieChart = ({
  transactions,
}: PieChartModel): ReactElement => {
  return (
    <PieChart
      series={[
        {
          data: [
            {
              id: 0,
              value: transactions[0].count,
              label: transactions[0].name,
              color: "#10b981",
            },
            {
              id: 1,
              value: transactions[1].count,
              label: transactions[1].name,
              color: "#6366f1",
            },
          ],
        },
      ]}
      width={200}
      height={200}
      sx={{
        "& .MuiChartsLegend-root, & .MuiChartsArcLabel-root, & .MuiChartsLegend-label":
          {
            color: "#fff",
          },
      }}
    />
  );
};
