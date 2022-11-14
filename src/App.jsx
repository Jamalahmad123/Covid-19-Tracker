import { useEffect, useState } from "react";
import Charts from "./components/Charts";
import Cards from "./components/Cards";
import CountrySelector from "./components/CountrySelector";
import {
  fetchDailyData,
  fetchData,
  fetchCountryData,
} from "./Actions/fetchData";

function App() {
  const [data, setData] = useState({});
  const [value, setValue] = useState("");
  const [globalChart, setglobalChart] = useState([]);

  async function getGlobalData() {
    const result = await fetchData();
    setData(result);
  }

  async function getglobalChart() {
    const result = await fetchDailyData();
    setglobalChart(result);
  }

  useEffect(() => {
    getGlobalData();
    getglobalChart();
  }, []);

  async function getCountryData() {
    if (value.label) {
      const result = await fetchCountryData(value?.label);
      setData(result);
    }
  }

  useEffect(() => {
    getCountryData();
  }, [value]);

  return (
    <div className="container mx-auto flex items-center justify-center flex-col px-4 pt-12 space-y-8">
      <Cards data={data} />
      <CountrySelector setValue={setValue} value={value} />
      <Charts globalChart={globalChart} data={data} country={value} />
    </div>
  );
}

export default App;
