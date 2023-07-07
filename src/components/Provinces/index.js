import { useSelector } from "react-redux";
import StyledProvinces from "./Provinces.styled";
import store from "../../store";

function Provinces(props) {
    const provinces = useSelector((store) => store.covid.covid);

    return(
        <StyledProvinces>
            <h1>Covid ID</h1>
            <h3>Monitoring Perkembangan Covid</h3>
            
            <table>
                <thead>
                <tr>
                    <th>Provinsi</th>
                    <th>Positif</th>
                    <th>Sembuh</th>
                    <th>Dirawat</th>
                    <th>Meninggal</th>
                </tr>
                </thead>
                {provinces && provinces.map((province , index) => {
                    return(
                        <tbody key={index}>
                        <tr >
                            <td>{province.kota}</td>
                            <td>{province.kasus}</td>
                            <td>{province.sembuh}</td>
                            <td>{province.meninggal}</td>
                            <td>{province.dirawat}</td>
                        </tr>
                       </tbody>
                    );
                })}
            </table>
        </StyledProvinces>
    )
}

export default Provinces;