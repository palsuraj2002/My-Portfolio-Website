import React from "react";
import { AgCharts } from "ag-charts-react";
import { AllCommunityModule, ModuleRegistry } from "ag-charts-community";

ModuleRegistry.registerModules([AllCommunityModule]);

const Chart = ({
  data = [],
  series = [],
  title = "",
  subtitle = "",
  height = 400,
  width=500,
}) => {
  // We define the options object based on the props received
  const options = {
    data: data,
    series: series,
    title: { text: title },
    subtitle: { text: subtitle },
    height: height,
    width:width,
    // You can add global styling here (e.g., theme, background)
    theme: "ag-vivid",
  };

  return <AgCharts options={options} />;
};

export default Chart;
