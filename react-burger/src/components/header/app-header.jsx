import React from "react";
import {BurgerIcon, Logo, MenuIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css';

function AppHeader() {

    return (
        <nav className={styles.header}>
            <div className={styles.navBox}>
                <div className={styles.btn}>
                    <BurgerIcon type="primary"/>
                    <p className="text text_type_main-default">
                        Конструктор</p>
                </div>
                <div className={styles.btn}>
                    <MenuIcon type="primary"/>
                    <p className="text text_type_main-default text_color_inactive">
                        лента заказов</p>
                </div>
            </div>
            <div>
                <Logo/>
            </div>
            <div className={styles.navBox}>
                <ProfileIcon type="primary"/>
                <p className="text text_type_main-default text_color_inactive">
                    личный кабинет
                </p>
            </div>
        </nav>
    )
}

export default AppHeader