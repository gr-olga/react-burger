import React, {useContext, useEffect} from "react";
import styles from './burger-constructor.module.css'
import {ConstructorElement, CurrencyIcon, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import {BurgerIngredientsTypes} from "../../utils/types";
import {BurgerContext} from "../../context/BurgerContext";

function BurgerConstructor(props) {
    const data = useContext(BurgerContext)

    const [list, setList] = React.useState([])

    useEffect(() => {
        setList(data.filter((item) => item.type === 'sauce' || item.type === 'main'))
    }, [data])

    const firstItem = data[0] ?? {};
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
                {list.map((item) => {
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