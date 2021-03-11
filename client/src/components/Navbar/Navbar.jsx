import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navContainer">
    <div className="navLogoText">
      <Link to="/">W2G</Link>
    </div>
  </nav>
);

export default Navbar;
