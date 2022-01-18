import { NavLink } from "react-router-dom";
import style from "./NavAuth.module.css";

const NavAuth = () => {
  return (
    <nav>
      <ul className={style.ul}>
        <li className={style.li}>
          <NavLink className={style.link} exact to="/login">
            Login
          </NavLink>
        </li>
        <li className={style.li}>
          <NavLink className={style.link} to="/register">
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavAuth;
