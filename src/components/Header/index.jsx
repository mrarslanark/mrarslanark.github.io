import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <h4 className={"name"}>Arslan Mushtaq</h4>
          <p className="subtitle">Principle Software Enginner</p>
        </div>
        <ul>
          <Link className=" nav-link-item nav-link " to={"/"}>
            Home
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
