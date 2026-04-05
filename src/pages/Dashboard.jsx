import React from "react";
import Chart from "../components/ui/Chart";

const Dashboard = () => {
  const tempData = [
    { month: "Jan", subscriptions: 222, services: 250, products: 200 },
    { month: "Feb", subscriptions: 240, services: 255, products: 210 },
    { month: "Mar", subscriptions: 280, services: 245, products: 195 },
    { month: "Apr", subscriptions: 300, services: 260, products: 205 },
    { month: "May", subscriptions: 350, services: 235, products: 215 },
    { month: "Jun", subscriptions: 420, services: 270, products: 200 },
    { month: "Jul", subscriptions: 300, services: 255, products: 225 },
    { month: "Aug", subscriptions: 270, services: 305, products: 210 },
    { month: "Sep", subscriptions: 260, services: 280, products: 250 },
    { month: "Oct", subscriptions: 385, services: 250, products: 205 },
    { month: "Nov", subscriptions: 320, services: 265, products: 215 },
    { month: "Dec", subscriptions: 330, services: 255, products: 220 },
  ];

  const temperatureSeries = [
    {
      type: "area",
      xKey: "month",
      yKey: "subscriptions",
      yName: "Subscriptions",
    },
  ];

  const salesSeries = [
    {
      type: "bar",
      xKey: "month",
      yKey: "subscriptions",
      yName: "Subscriptions",
      title: "Ice Cream Sales",
    },
  ];

  const tempSeries = [
    {
      type: "line",
      xKey: "month",
      yKey: "subscriptions",
      yName: "Subscriptions",
      title: "Avg Temp",
    },
  ];

   const donutSeries = [
     {
       type: "donut",
     
     },
   ];

  return (
    <div className="flex">
      <Chart
        data={tempData}
        series={salesSeries}
        title="Monthly Revenue"
        subtitle="Average monthly temperatures"
        width={500}
      />

      <Chart
        data={tempData}
        series={tempSeries}
        title="Climate Trends"
        subtitle="Average monthly temperatures"
        width={500}
      />

      <Chart
        data={tempData}
        series={temperatureSeries}
        title="Climate Trends"
        subtitle="Average monthly temperatures"
        width={500}
      />

      <Chart
        data={tempData}
        series={temperatureSeries}
        title="Climate Trends"
        subtitle="Average monthly temperatures"
        width={500}
      />
    </div>
  );
};

export default Dashboard;
