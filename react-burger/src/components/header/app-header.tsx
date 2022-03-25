import React from "react";
import {BurgerIcon, Logo, MenuIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css';
import {NavLink, useRouteMatch} from 'react-router-dom';

function AppHeader() {
const isConstructorActive = !!useRouteMatch({path: '/', exact: true});
const isFeedActive = !!useRouteMatch('/feed');
const isProfileActive = !!useRouteMatch('/profile');

    return (
        <nav>
            <div className={styles.header}>
                <div className={styles.navBox}>
                    <div className={styles.btn}>
                        <NavLink
                            className={styles.navBox2}
                            to={"/"}
                            activeClassName={styles.activeLink}
                            exact
                        >
                            <BurgerIcon type={isConstructorActive ? 'primary' : 'secondary'}/>
                            <p className={`text text_type_main-default ${styles.text}`}>
                                Конструктор</p>
                        </NavLink>
                    </div>
                    <div className={styles.btn}>
                        <NavLink
                            className={styles.navBox2}
                            to={'/feed'}
                            activeClassName={styles.activeLink}
                        >
                            <MenuIcon type={isFeedActive ? 'primary' : 'secondary'}/>
                            {/*<p className={`text text_type_main-default ${styles.text}`}>*/}
                            <p className='text text_type_main-default ml-2'>
                                Лента заказов</p>
                        </NavLink>
                    </div>
                </div>
                <div className={styles.logo}>
                    <Logo/>
                </div>
                <NavLink
                    className={styles.navBox2}
                    to={"/profile"}
                    activeClassName={styles.activeLink}
                >
                    <ProfileIcon type={isProfileActive ? 'primary' : 'secondary'}/>
                    <span className={`text text_type_main-default ${styles.text}`}>личный кабинет</span>
                </NavLink>
            </div>
        </nav>
    )
}

export default AppHeader