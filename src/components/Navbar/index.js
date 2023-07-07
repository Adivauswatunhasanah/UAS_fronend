import StyledNavbar from "./Navbar.styled";
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <StyledNavbar>
      <h1>Covid App</h1>
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
    </StyledNavbar>
  );
}

export default Navbar;
