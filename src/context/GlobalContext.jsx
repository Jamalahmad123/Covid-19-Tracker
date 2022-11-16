import { createContext, useState, useEffect } from "react";
import {
  fetchDailyData,
  fetchData,
  fetchCountryData,
} from "../Actions/fetchData";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [value, setValue] = useState("");
  const [globalChart, setglobalChart] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getGlobalData() {
    const result = await fetchData();
    setData(result);
  }

  async function getglobalChart() {
    setLoading(true);
    const result = await fetchDailyData();
    setglobalChart(result);
    setLoading(false);
  }

  useEffect(() => {
    getGlobalData();
    getglobalChart();
  }, []);

  async function getCountryData() {
    setLoading(true);
    if (value.label) {
      const result = await fetchCountryData(value?.label);
      setData(result);
    }
    setLoading(false);
  }

  useEffect(() => {
    getCountryData();
  }, [value]);

  return (
    <GlobalContext.Provider
      value={{ data, value, loading, setValue, globalChart }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
