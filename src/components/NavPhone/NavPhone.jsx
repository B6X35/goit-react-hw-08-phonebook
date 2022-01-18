import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import style from './NavPhone.module.css';

const NavPhone = () => {
    const isLoginUser = useSelector((state) => state.auth.isLoginUser);
    return (
        <nav>
            <ul className={style.ul}>
                <li className={style.li}>
                    <NavLink className={style.link} exact to='/'>Home</NavLink>
                </li>
                {isLoginUser && (<li className={style.li}>
                    <NavLink className={style.link} exact to='/contacts'>Contacts</NavLink>
                </li>)}
            </ul>
        </nav>
    )
}

export default NavPhone;