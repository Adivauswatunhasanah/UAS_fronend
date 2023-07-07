import StyledFooter from "./Footer.styled";
import {Link} from "react-router-dom"

function Footer() {
  return (
    <StyledFooter>
      <div className="kiri">
        <h2>Covid App</h2>
        <p>Developed by Adivatun</p>
      </div>
      <ul>
        <li>
          <Link className="link"  to="/">
            Global
          </Link>
        </li>
        <li>
        <Link className="link" to="/indonesia">
            Indonesia
        </Link>
        </li>
        <li>
        <Link className="link" to="/provinsi">
            Provinsi
        </Link>
        </li>
        <li>
        <Link className="link" to="/about">
            About
        </Link>
        </li>
      </ul>
    </StyledFooter>
  );
}

export default Footer;
