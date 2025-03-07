// import React from "react";
// import MostSearchCom from "../Components/MostSearchCom";
// import NewCalcu from "../Components/NewCalcu";


// const Home = () => {
//   return (
//     <>
      
//       <MostSearchCom />
//       <NewCalcu />
//     </>
//   );
// };

// export default Home;

import React, { lazy, Suspense } from "react";
import MostSearchCom from "../Components/MostSearchCom";

// Lazy load the NewCalcu component
const NewCalcu = lazy(() => import("../Components/NewCalcu"));

const Home = () => {
  return (
    <>
      <MostSearchCom />
      
      {/* Suspense ensures NewCalcu has a fallback while loading */}
      <Suspense fallback={<div>Loading Calculator...</div>}>
        <NewCalcu />
      </Suspense>
    </>
  );
};

export default Home;
