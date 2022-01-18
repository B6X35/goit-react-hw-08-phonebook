import { useSelector } from "react-redux";
import NavAuth from "../NavAuth";
import NavPhone from "../NavPhone";
import UserMenu from "../UserMenu";
import style from './NavAll.module.css'

const NavAll = () => {
    const isLoginUser = useSelector((state) => state.auth.isLoginUser);
    return (
        <header className={style.header}>
            <div className={style.div}>
                <NavPhone />
                {isLoginUser ? <UserMenu /> : <NavAuth />}
            </div>
        </header>
    )
}

export default NavAll;