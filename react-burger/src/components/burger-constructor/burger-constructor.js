import React from "react";
import {render} from "react-dom";
import styles from './burger-constructor.module.css'
import {ConstructorElement, CurrencyIcon, DragIcon, DeleteIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import Bun from'../../images/bun02.png'
import Bun1 from'../../images/bun01.png'

function BurgerConstructor(props) {

    return (
        <div className={styles.coneiner}>
        <div className={styles.list}>
            <ConstructorElement
                type="top"
                isLocked={true}
                text="Краторная булка N-200i (верх)"
                price={200}
                thumbnail={Bun}
            />
            <div className={styles.cunt}>
            <DragIcon type="primary" />
            <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail={Bun1}
            />
            </div>
            <div>
            <ConstructorElement
                type="bottom"
                isLocked={true}
                text="Краторная булка N-200i (низ)"
                price={200}
                thumbnail={Bun1}
            />
            </div>
        </div>
            <div className={styles.total}>
                <h2 className={styles.sum}>200</h2>
                <CurrencyIcon type="primary" />
                <button className={styles.btn}>Оформить заказ</button>
            </div>
        </div>
    )
}
export default  BurgerConstructor