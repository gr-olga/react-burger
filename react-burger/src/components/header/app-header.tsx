import React from "react";
import {BurgerIcon, Logo, MenuIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css';
import {NavLink} from 'react-router-dom';

function AppHeader() {

    return (
        <nav>
            <div className={styles.header}>
                <div className={styles.navBox}>
                    <div className={styles.btn}>
                        <NavLink className={styles.navBox2} to={"/"} activeClassName={styles.activeLink}>
                        <BurgerIcon type="primary"/>
                        <p className={`text text_type_main-default ${styles.text}`}>
                            Конструктор</p>
                        </NavLink>
                    </div>
                    <div className={styles.btn}>
                        <NavLink className={styles.navBox2} to={"/order"} activeClassName={styles.activeLink}>
                        <MenuIcon type="primary"/>
                        <p className={`text text_type_main-default ${styles.text}`}>
                            Лента заказов</p>
                        </NavLink>
                    </div>
                </div>
                <div className={styles.logo}>
                    <Logo/>
                </div>
                <NavLink className={styles.navBox2} to={"/profile"} activeClassName={styles.activeLink}>
                    <ProfileIcon type="primary"/>
                        <span className={`text text_type_main-default ${styles.text}`}>личный кабинет</span>
                </NavLink>
            </div>
        </nav>
    )
}

export default AppHeader