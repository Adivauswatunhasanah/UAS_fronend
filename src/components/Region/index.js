import imgsakit from '../../img/comfimed.jpeg'
import imgsembuh from '../../img/recovered.jpeg'
import imgmati from '../../img/death.jpeg'
import styled from "styled-components";
const StyRegions = styled.div`

border-radius: 10px;
padding: 1rem;
width: 300px;
background-color: white;
box-shadow: 2px 4px 4px 2px rgba(0, 0, 0, 0.4);
margin: 0 auto;
margin-bottom: 20px;

.kotak__card {
    text-align: center;
    font-size: 30px;
    
}

.comp__title {
    font-size: 15px;
    color: #435B66;
}

.comp__total {
    /* border: 1px solid black; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* align-content: start; */
    margin-top: -35px;
}

.jumlah {
    font-weight: 400;
    
}

.kotak .componen:nth-of-type(1) .comp__total .jumlah{
    color: green;
}
.kotak .componen:nth-of-type(2) .comp__total .jumlah{
    color: blue;
}
.kotak .componen:nth-of-type(3) .comp__total .jumlah{
    color: red;
}


@media(min-width: 768px) {
    .kotak__card {
        font-size: 25px;
        
    }
    
}
    @media(min-width: 982px) {
    }




`;
function Region(props) {
    const {Regs} = props
    console.log(Regs);
    return (
        <StyRegions>
            <div className="kotak">
                <h2 className="kotak__card">
                    {Regs.name}
                </h2>
                <div className="componen">
                    <h2 className="comp__title">
                        Comfirmed
                    </h2>
                    <div className="comp__total">
                        <h2 className="jumlah">
                          {Regs.numbers.confirmed}  
                        </h2>
                        <img className="img" src={imgsakit} alt="" />
                        {/* <p>halo</p> */}
                    </div>
                </div>
                <div className="componen">
                    <h2 className="comp__title">
                        Recovered
                    </h2>
                    <div className="comp__total">
                        <h2 className="jumlah">
                          {Regs.numbers.recovered}  
                        </h2>
                        <img className="img" src={imgsembuh} alt="" />
                        {/* <p>halo</p> */}
                    </div>
                </div>
                <div className="componen">
                    <h2 className="comp__title">
                        Death
                    </h2>
                    <div className="comp__total">
                        <h2 className="jumlah">
                          {Regs.numbers.death}  
                        </h2>
                        <img className="img" src={imgmati} alt="" />
                        {/* <p>halo</p> */}
                    </div>
                </div>
            </div>
            
        </StyRegions>

    )
}

export default Region;
                 