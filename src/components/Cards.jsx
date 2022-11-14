import logo from "../assets/logo.png";
import CountUp from "react-countup";

const Cards = ({ data }) => {
  const { confirmed, deaths, recovered, lastUpdate } = data;
  return (
    <div className="grid place-items-center gap-4">
      <img src={logo} alt="logo" className="object-cover" />
      <div className="flex items-center justify-center flex-wrap gap-6">
        <div className="shadow-lg p-6 rounded-lg border-b-8 border-blue-500">
          <p className="text-gray-500 text-sm">Infected</p>
          <h2 className="text-black text-lg md:text-xl font-medium mb-2">
            {
              <CountUp
                start={0}
                end={confirmed?.value}
                duration={2.5}
                decimal=","
              />
            }
          </h2>
          <p className="text-gray-500 text-sm">
            {new Date(lastUpdate).toLocaleDateString()}
          </p>
          <p className="text-sm">Number of active cases of covid-19</p>
        </div>
        <div className="shadow-lg p-6 rounded-lg border-b-8 border-green-500">
          <p className="text-gray-500 text-sm">Recovered</p>
          <h2 className="text-black text-lg md:text-xl font-medium mb-2">
            {
              <CountUp
                start={0}
                end={recovered?.value}
                duration={2.5}
                decimal=","
              />
            }
          </h2>
          <p className="text-gray-500 text-sm">
            {new Date(lastUpdate).toLocaleDateString()}
          </p>
          <p className="text-sm">Number of recoveries from covid-19</p>
        </div>
        <div className="shadow-lg p-6 rounded-lg border-b-8 border-red-500">
          <p className="text-gray-500 text-sm">Deaths</p>
          <h2 className="text-black text-lg md:text-xl font-medium mb-2">
            {
              <CountUp
                start={0}
                end={deaths?.value}
                duration={2.5}
                decimal=","
              />
            }
          </h2>
          <p className="text-gray-500 text-sm">
            {new Date(lastUpdate).toLocaleDateString()}
          </p>
          <p className="text-sm">Number of deaths cause by covid-19</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
