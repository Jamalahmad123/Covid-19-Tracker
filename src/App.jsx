import Charts from "./components/Charts";
import Cards from "./components/Cards";
import CountrySelector from "./components/CountrySelector";
import { GlobalContextProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalContextProvider>
      <div className="container mx-auto flex items-center justify-center flex-col px-4 pt-12 space-y-8">
        <Cards />
        <CountrySelector />
        <Charts />
      </div>
    </GlobalContextProvider>
  );
}

export default App;
