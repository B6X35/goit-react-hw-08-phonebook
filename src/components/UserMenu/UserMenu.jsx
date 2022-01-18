import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentUser, logoutUser } from "../../redux/authorization/authOperation";
// import { getUserMail } from "../../redux/authorization/authSelector";
import style from './UserMenu.module.css'

const UserMenu = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token)
    const email = useSelector((state) => state.auth.user.email);
    // console.log()
    // const state = useSelector((state) => state)

    return (
        <div className={style.div}>
            <h1 className={style.h1}>{email}</h1><button className={style.link} type="button" onClick={() => dispatch(logoutUser(token))}>logout</button>
        </div>
    )
}

export default UserMenu;