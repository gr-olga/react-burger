import styles from "./profile-navigation.module.css";

function ProfileNavigation(props: any){
    return(
        <div className={styles.navContainer}>
            <nav className={styles.linksList}>
                <a className={ props.type === 'profile' ?  styles.linkActive : styles.link} >
                    Профиль
                </a>
                <a className={ props.type === 'orderHistory' ? styles.linkActive : styles.link  }>
                    История заказов
                </a>
                <a className={styles.link}>
                    Выход
                </a>
            </nav>
            <p className={styles.paragraph}>В этом разделе вы можете
                изменить свои персональные данные</p>
        </div>
    )
}

export default ProfileNavigation