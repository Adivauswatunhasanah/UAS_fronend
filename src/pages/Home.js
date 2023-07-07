
// import Hello from "../components/Hello";
import Hero from "../components/Hero";

import { useEffect } from "react";
import axios from "axios";
import Global from "../components/Global";
import Regionss from "../components/Regionss";
import ENPOINTS from "../utils/constants/enpoints";
import { useDispatch } from "react-redux";
import { addData } from "../Features/Slice/global";


  
  function Home() {
    // const [GloCovid, setCovidGlobal] = useState([]);
    const dispatch = useDispatch()



    useEffect(() => {
      getGlobalCovid();
    },[])

    async function getGlobalCovid() {
        const res = await axios(ENPOINTS.GLOBAL);
        dispatch(addData(res.data))
        // setCovidGlobal(res.data)
        // console.log(res);
    }
    
    return (
      <>
      <Hero/>
      <Global title="Global Situation" desk="Data covid berdasarkan Global" />
      <Regionss title="Situation by Region" desk="Bacaan Pilihan Covid" />
    </>
  );
}

export default Home;
