import styled from "styled-components";
import Region from "../Region";
import { useSelector } from "react-redux";
import store from "../../store";
const StyRegions = styled.div`
    max-width: 1200px;
    /* border: 1px solid black; */
    margin: 0 auto;
    .top {
        text-align: center;
    }

    
     h1{
        color:  #06D6A0;
        font-size: 30px }

    h3{
        color: #118AB2;
        margin-top: 0;
        margin-bottom: 4rem;
        margin-top: -2rem;
        font-size: 15px;
        font-weight: 400;
        text-align: center;
    }

    /* .bottom {
        display: flex;
        
    } */
    /* .card {
        border-radius: 10px;
        padding: 1rem;
        width: 300px;
        background-color: white;
        box-shadow: 2px 4px 4px 2px rgba(0, 0, 0, 0.4);

    } */
    
    
    @media(min-width: 768px) {
        h3{
            font-size: 20px;
        }
        .bottom {
            /* border: 1px solid black; */
            display: flex;
            flex-wrap: wrap;
            /* justify-content: space-between; */
            /* margin: auto; */
            
    
        }
        h1 {
            font-size: 3.052rem;
        }

    }

`;
function Regionss(props) {
    const RegCovid = useSelector((store) => store.dataCovid.dataCovid)
    return (
        <StyRegions>
        <section className="region">
            <div className="top">
             <h1>{props.title}</h1>
             <h3>{props.desk}</h3>
            </div>
            <div className="bottom">
                {RegCovid.regions && RegCovid.regions.map((Regs, index) => {
                    return(
                        <Region key={index} Regs={Regs}/>
                    )
                })}
            </div>
        </section>
        </StyRegions>
    )
}

export default Regionss;