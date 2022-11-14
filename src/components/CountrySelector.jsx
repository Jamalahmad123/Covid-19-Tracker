import { useState, useMemo, useEffect } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

function CountrySelector({ setValue, value }) {
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };

  return (
    <Select
      options={options}
      value={value}
      onChange={changeHandler}
      className="w-full md:w-[60%]"
    />
  );
}

export default CountrySelector;
