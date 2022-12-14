import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import Spinner from "./Spinner";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Charts = () => {
  // Context
  const {
    globalChart,
    data: { confirmed, deaths },
    value: country,
    loading,
  } = useContext(GlobalContext);

  /////////////////////////////
  // Bar Chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Current State in ${country && country.label}`,
      },
    },
  };

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [
              confirmed.value,
              confirmed.value - deaths.value,
              deaths.value,
            ],
          },
        ],
      }}
      options={options}
    />
  ) : null;

  ////////////////////////////
  // Line Chart
  const lineChart = globalChart.length ? (
    <Line
      data={{
        labels: globalChart.map(({ date }) => date),
        datasets: [
          {
            data: globalChart.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: globalChart.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "rgba(255, 0, 0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return globalChart.length ? (
    <div className="w-full flex justify-center pb-22 md:w-[85%]">
      {country ? barChart : lineChart}
    </div>
  ) : (
    <Spinner />
  );
};

export default Charts;
