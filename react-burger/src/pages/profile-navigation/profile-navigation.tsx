import styles from "./profile-navigation.module.css";
import {getLogOut} from "../../api/api";
import {useSelector} from "../../utils/types";
import {LogOut, REMOVE_USER} from "../../services/actions/auth";
import {useDispatch} from 'react-redux';
import {userData} from "../../services/reducers/auth";
import {NavLink, useHistory} from "react-router-dom";
import {eraseCookie, getCookie} from "../../utils/cookies-helpers";

function ProfileNavigation(props: any) {
    const history = useHistory();
    const dispatch = useDispatch();
    const token = getCookie('accessToken');

 console.log(token)
    function logOut() {
        (dispatch(LogOut(token)) as any)
            .then(() => dispatch({type: REMOVE_USER, userData}))
            .finally(() => {
                sessionStorage.removeItem('refreshToken')
                eraseCookie('accessToken')
                history.replace({pathname: '/login'})
            })
    }

    return (
        <div className={styles.navContainer}>
            <nav className={styles.linksList}>
                <NavLink className={styles.link} to={"/profile"} activeClassName={styles.activeLink}>
                    Профиль
                </NavLink>
                <NavLink className={styles.link} to={"/order"} activeClassName={styles.activeLink}>
                    История заказов
                </NavLink>
                <button type="button" className={styles.link} onClick={logOut}>
                    Выход
                </button>
            </nav>
            <p className={styles.paragraph}>В этом разделе вы можете
                изменить свои персональные данные</p>
        </div>
    )
}

export default ProfileNavigation