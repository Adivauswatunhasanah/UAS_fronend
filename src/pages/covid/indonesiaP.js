// import { useState } from "react";
import Hero from "../../components/Hero";
import { useEffect } from "react";
import axios from "axios";
import Indonesia from "../../components/Indonesia";
import TableIndo from "../../components/Indonesia/tableIndo";
import ENPOINTS from "../../utils/constants/enpoints";
import { useDispatch } from "react-redux";
import { addData } from "../../Features/Slice/global";

function IndonesiP() {
    const dispatch = useDispatch()


    useEffect(() => {
        getIndoCovid();
        // getGlobalCovid();
    }, []);

    async function getIndoCovid() {
        const res = await axios(ENPOINTS.INDONESIA);
        dispatch(addData(res.data))
    }

    // async function getGlobalCovid() {
    //     const res = await axios(URL_GLOBAL);
    //     setCovidGlobal(res.data)
    // }

    
    return(
        <>
           <Hero/>
           <Indonesia title="Indonesia Situation" desk="Data covid berdasarkan Indonesia" />
           <TableIndo title="Region by Provinces" desk="Data covid berdasarkan Provisi"/>
        </> 
    )
    
}

export default IndonesiP;