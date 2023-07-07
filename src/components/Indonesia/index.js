// import StyledGlobal from "./Global.styled";
// import data from "../../utils/constants/indonesia"
import { useSelector } from "react-redux";
import StyledGlobal from "../Global/Global.styled";
import IndoGloData from "../Indo&Glodata";
import store from "../../store";

function Indonesia(props) {
    // const globals = data.indonesia;
    const IndoCovid = useSelector((store) => store.dataCovid.dataCovid)
    console.log(IndoCovid);

    return(
        <StyledGlobal>
            <h1>{props.title}</h1>
            <h3>{props.desk}</h3>
            <div className="container">
                {IndoCovid.indonesia && IndoCovid.indonesia.map((Indos, index) => {
                    return(
                        <IndoGloData key={index} Indos={Indos}/>
                    )
                })}
            
            </div>
        </StyledGlobal>
                
            
    )
}

export default Indonesia;