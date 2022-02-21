import styles from "./profile-navigation.module.css";
import {getLogOut} from "../../api/api";
import {useSelector} from "../../utils/types";
import {REMOVE_USER} from "../../services/actions/auth";
import {useDispatch} from 'react-redux';

function ProfileNavigation(props: any) {
    const dispatch = useDispatch();
    const {refreshToken} = useSelector(({userReducer}) => userReducer)

    function logOut() {
        getLogOut(refreshToken)
            // .then(
            //     dispatch( {type: REMOVE_USER, userData})
            // )
    }


    return (
        <div className={styles.navContainer}>
            <nav className={styles.linksList}>
                <a className={props.type === 'profile' ? styles.linkActive : styles.link}>
                    Профиль
                </a>
                <a className={props.type === 'orderHistory' ? styles.linkActive : styles.link}>
                    История заказов
                </a>
                <a className={styles.link} onClick={logOut}>
                    Выход
                </a>
            </nav>
            <p className={styles.paragraph}>В этом разделе вы можете
                изменить свои персональные данные</p>
        </div>
    )
}

export default ProfileNavigation