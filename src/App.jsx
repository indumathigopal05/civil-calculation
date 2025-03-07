// import { Routes, Route } from "react-router-dom";
// import Home from "../src/Pages/Home";
// import QualityEstimator from "./Pages/QualityEstimator";
// import ConcreteTechnology from "./Pages/ConcreteTechnology";
// import GeotechnicalEngineering from "./Pages/GeotechnicalEngineering";
// import EnvironmentalEngineering from "./Pages/EnvironmentalEngineering";
// import Contact from "./Contact";
// import ConstructionCost from "./Components/ConstructionCost";
// import Navbar from "./Components/Navbar";
// import CementCalculation from "./Components/CementConstruction/CementCalculation";
// import  BrickCalculation  from "./Components/Bricks Calculation/BrickCalculation";
// import Plastering from "./Components/PlasteringCalculation/Plastering";

// export default function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/Quantity Estimator" element={<QualityEstimator />} />
//         <Route path="/constructioncost" element={<ConstructionCost />} />
//         <Route path="/cement-concrete" element={<CementCalculation />} />
//         <Route path="/brickCalculation" element={<BrickCalculation />} />
//         <Route path="/Concretetechnology" element={<ConcreteTechnology />} />
//         <Route path="/plastering" element={<Plastering />} />

//         <Route
//           path="/geotechnical-engineering"
//           element={<GeotechnicalEngineering />}
//         />
//         <Route
//           path="/environmental-engineering"
//           element={<EnvironmentalEngineering />}
//         />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </>
//   );
// }
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Home from "../src/Pages/Home";
import QualityEstimator from "./Pages/QualityEstimator";
import ConcreteTechnology from "./Pages/ConcreteTechnology";
import GeotechnicalEngineering from "./Pages/GeotechnicalEngineering";
import EnvironmentalEngineering from "./Pages/EnvironmentalEngineering";
import Contact from "./Contact";
import Navbar from "./Components/Navbar";
import CementCalculation from "./Components/CementConstruction/CementCalculation";
import BrickCalculation from "./Components/Bricks Calculation/BrickCalculation";
import Plastering from "./Components/PlasteringCalculation/Plastering";
import Loader from "./Components/Loader"; 

// ✅ Lazy Load the ConstructionCost component
const ConstructionCost = lazy(() => import("./Components/ConstructionCost"));

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Quantity Estimator" element={<QualityEstimator />} />
        
        {/* ✅ Wrap ConstructionCost in Suspense */}
        <Route
          path="/constructioncost"
          element={
            <Suspense fallback={<Loader />}>
              <ConstructionCost />
            </Suspense>
          }
        />
        
        <Route path="/cement-concrete" element={<CementCalculation />} />
        <Route path="/brickCalculation" element={<BrickCalculation />} />
        <Route path="/Concretetechnology" element={<ConcreteTechnology />} />
        <Route path="/plastering" element={<Plastering />} />
        <Route path="/geotechnical-engineering" element={<GeotechnicalEngineering />} />
        <Route path="/environmental-engineering" element={<EnvironmentalEngineering />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
