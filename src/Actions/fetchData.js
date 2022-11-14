const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const fetchDailyData = async () => {
  const response = await fetch(`${url}/daily`);
  const data = await response.json();

  const modifiedData = data.map((item) => {
    return {
      confirmed: item.confirmed.total,
      deaths: item.deaths.total,
      date: item.reportDate,
    };
  });

  return modifiedData;
};

export const fetchCountryData = async (country) => {
  const response = await fetch(`${url}/countries/${country}`);

  const data = await response.json();

  return data;
};
