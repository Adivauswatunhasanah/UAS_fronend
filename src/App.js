import Home from "./pages/Home";

import {Routes, Route} from 'react-router-dom'
import IndonesiP from "./pages/covid/indonesiaP";
import ProvinsiP from "./pages/covid/provinsiP";
import AbouteP from "./pages/covid/aboutP";
import Layout from "./components/layout";
// import { useState } from "react";
// import data from "./utils/constants/provinces";

function App() {
  // const [provinces, setProvinces] = useState(data.provinces)
  return (
    <div>
      <Layout>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/indonesia" element={<IndonesiP />}/>
        <Route path="/provinsi" element={<ProvinsiP  />}/>
        <Route path="/about" element={<AbouteP/>}/>
      </Routes>
      </Layout>
    </div>
  );
}

export default App;
