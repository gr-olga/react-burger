import React from "react";
import {BurgerIcon, Logo, MenuIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css';
import {Link} from 'react-router-dom';

function AppHeader() {

    return (
        <nav>
            <div className={styles.header}>
                <div className={styles.navBox}>
                    <div className={styles.btn}>
                        <BurgerIcon type="primary"/>
                        <p className={`text text_type_main-default ${styles.text}`}>
                            Конструктор</p>
                    </div>
                    <div className={styles.btn}>
                        <MenuIcon type="primary"/>
                        <p className={`text text_type_main-default text_color_inactive ${styles.text}`}>
                            Лента заказов</p>
                    </div>
                </div>
                <div className={styles.logo}>
                    <Logo/>
                </div>
                <Link className={styles.navBox2} to={"/profile"}>
                    <ProfileIcon type="primary"/>
                        <span className={`text text_type_main-default text_color_inactive ${styles.text}`}>личный кабинет</span>
                </Link>
            </div>
        </nav>
    )
}

export default AppHeader