import styles from "./profile-navigation.module.css";
import {getLogOut} from "../../api/api";
import {useSelector} from "../../utils/types";
import {REMOVE_USER} from "../../services/actions/auth";
import {useDispatch} from 'react-redux';
import {userData} from "../../services/reducers/auth";
import {useHistory} from "react-router-dom";
import {eraseCookie} from "../../utils/cookies-helpers";

function ProfileNavigation(props: any) {
    const history = useHistory();
    const dispatch = useDispatch();
    const {refreshToken} = useSelector(({userReducer}) => userReducer)

    function logOut() {
        getLogOut(refreshToken)
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
                <button type="button" className={props.type === 'profile' ? styles.linkActive : styles.link}>
                    Профиль
                </button>
                <button type="button" className={props.type === 'orderHistory' ? styles.linkActive : styles.link}>
                    История заказов
                </button>
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