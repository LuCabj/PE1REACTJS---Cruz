import Widget from "../../common/CartWidget/Widget";
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import "./StylesNavBar.css";

const NavegationBar = () => {
  return (
    <div className="container-navbar">
      <h3> <DriveEtaIcon /> </h3>
      <ul>
        <li>Modernas</li>
        <li>Clasicas</li>
      </ul>
      <Widget />
    </div>
  )
}

export default NavegationBar;
