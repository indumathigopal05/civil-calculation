import { Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home";
import QualityEstimator from "./Pages/QualityEstimator";
import ConcreteTechnology from "./Pages/ConcreteTechnology";
import GeotechnicalEngineering from "./Pages/GeotechnicalEngineering";
import EnvironmentalEngineering from "./Pages/EnvironmentalEngineering";
import Contact from "./Contact";
import ConstructionCost from "./Components/ConstructionCost";
import Navbar from "./Components/Navbar";
//import CalculationList from "./Components/Construction-cost";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Quantity Estimator" element={<QualityEstimator />} />
        <Route path="/constructioncost" element={<ConstructionCost />} />
        <Route path="/Concretetechnology" element={<ConcreteTechnology />} />
        <Route
          path="/geotechnical-engineering"
          element={<GeotechnicalEngineering />}
        />
        <Route
          path="/environmental-engineering"
          element={<EnvironmentalEngineering />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
