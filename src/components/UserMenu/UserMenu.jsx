import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/authorization/authOperation";
import style from './UserMenu.module.css'

const UserMenu = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token)
    const email = useSelector((state) => state.auth.user.email);

    return (
        <div>
            <title>{email}</title><button className={style.link} type="button" onClick={() => dispatch(logoutUser(token))}>logout</button>
        </div>
    )
}

export default UserMenu;