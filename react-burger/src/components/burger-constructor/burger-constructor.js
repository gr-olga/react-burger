import React from "react";
import styles from './burger-constructor.module.css'
import {ConstructorElement, CurrencyIcon, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import {BurgerIngredientsTypes} from "../../utils/types";

function BurgerConstructor(props) {

    // function orderClick(){
    //     props.onOrderClick()
    // }

    const firstItem = props.data[0] ?? {};
    // const lastItem = props.data[props.data.length - 1] ?? {};
    const middleItemsList = props.data.slice(1, props.data.length - 1)
    return (
        <div className={styles.box}>
            <section className={styles.bunSection}>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={firstItem.name + "(верх)"}
                    price={firstItem.price}
                    thumbnail={firstItem.image}
                />
            </section>
            <div className={styles.container}>
                {middleItemsList.map((item) => {
                    return (
                        <div className={styles.middleItemsList} key={item._id}>
                            <DragIcon type="primary" />
                            <ConstructorElement
                                isLocked={false}
                                text={item.name}
                                price={item.price}
                                thumbnail={item.image}
                            />
                        </div>
                    )
                })}
            </div>
            <section className={styles.bunSection}>
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={firstItem.name + "(низ)"}
                    price={firstItem.price}
                    thumbnail={firstItem.image}
                />
            </section>
            <div className={styles.total}>
                <h2 className={styles.sum}>200</h2>
                <CurrencyIcon type="primary"/>
                <button
                    className={styles.btn}
                    onClick={props.onOrderClick}
                >
                    Оформить заказ</button>
            </div>
        </div>
    )
}

BurgerConstructor.propTypes = BurgerIngredientsTypes

export default BurgerConstructor