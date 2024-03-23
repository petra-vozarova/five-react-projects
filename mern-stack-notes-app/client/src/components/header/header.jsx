import "./header.styles.css";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className="header-container">
      <h3>Mern Stack Blog App</h3>
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/add"}>
          <li>Add Blog</li>
        </Link>
      </ul>
    </div>
  );
};
