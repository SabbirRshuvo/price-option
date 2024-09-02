import "./App.css";
import DaisyNav from "./Components/Daisy/DaisyNav";
import LineCharts from "./Components/LineCharts/LineCharts";
import NavBar from "./Components/NavBar/NavBar";
import Phones from "./Components/Phones/Phones";
import PriceOptions from "./Components/PriceOptions/PriceOptions";
import PriceOption from "./Components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <NavBar />
      <PriceOptions />
      <LineCharts />
      <Phones />
      {/* <DaisyNav/> */}
    </>
  );
}

export default App;
