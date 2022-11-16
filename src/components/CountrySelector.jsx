import { useContext, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import GlobalContext from "../context/GlobalContext";

function CountrySelector() {
  const options = useMemo(() => countryList().getData(), []);

  const { setValue, value } = useContext(GlobalContext);

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
