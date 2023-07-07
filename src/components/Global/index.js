import StyledGlobal from "./Global.styled";
// import data from "../../utils/constants/indonesia"
import IndoGloData from "../Indo&Glodata";
import { useSelector } from "react-redux";
import store from "../../store";

function Global(props) {
    // const globals = data.indonesia;
    // const {GloCovid} = props
    const GloCovid = useSelector((store) => store.dataCovid.dataCovid)
    console.log(GloCovid);

    return(
        <StyledGlobal>
            <h1>{props.title}</h1>
            <h3>{props.desk}</h3>
            <div className="container">
                {GloCovid.global && GloCovid.global.map((Indos, index) => {
                    return(
                        <IndoGloData key={index} Indos={Indos}/>
                    )
                })}
            </div>
        </StyledGlobal>
    )
}

export default Global