import { useSelector } from "react-redux";
import StyledProvinces from "../Provinces/Provinces.styled";
import store from "../../store";
function TableIndo(props) {
    const IndoCovid = useSelector((store) => store.dataCovid.dataCovid)

    return(
        <StyledProvinces>
            <h1>{props.title}</h1>
            <h3>{props.desk}</h3>

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
                {IndoCovid.regions && IndoCovid.regions.map((province) => {
                    return(
                        <tbody key={province.name}>
                        <tr >
                            <td>{province.name}</td>
                            <td>{province.numbers.confirmed}</td>
                            <td>{province.numbers.recovered}</td>
                            <td>{province.numbers.treatment}</td>
                            <td>{province.numbers.death}</td>
                        </tr>
                        </tbody>
                    );
                })}
            </table>
        </StyledProvinces>
    )
}

export default TableIndo;