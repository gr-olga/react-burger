import React, {useContext, useEffect, useState} from "react";
import styles from './burger-constructor.module.css'
import {ConstructorElement, CurrencyIcon, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import {BurgerIngredientsTypes} from "../../utils/types";
import {BurgerContext} from "../../services/BurgerContext";
import {useSelector} from "react-redux";

function BurgerConstructor(props) {
    // const {ingredients} = useSelector(state => state)
   // const {ingredients} = useSelector(({ingredientsReducer}) => ingredientsReducer)
    const {constructorIngredients} = useSelector(({ingredientsReducer}) => ingredientsReducer)
    const [sum, setSum] = useState(0);
    const [nonBunIngredientsList, setNonBunIngredientsList] = React.useState([])
    const [bunItem, setBunItem] = React.useState({})

    useEffect(() => {
        setNonBunIngredientsList(constructorIngredients.filter((item) => item.type === 'sauce' || item.type === 'main'))
        const bun = constructorIngredients.find((item) => item.type === 'bun')
        if (bun) setBunItem(bun)
    }, [constructorIngredients])

    // const firstItem = data[0] ?? {};


    useEffect(() => {
        const pricesList = nonBunIngredientsList.map((item) => Number(item.price))
        let num = bunItem.price ? bunItem.price * 2 : 0
        setSum(pricesList.reduce((a, b) => a + b, num))
    }, [constructorIngredients, nonBunIngredientsList])

    return (
        <div className={styles.box}>
            <section className={styles.bunSection}>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={bunItem.name + "(верх)"}
                    price={bunItem.price}
                    thumbnail={bunItem.image}
                />
            </section>
            <div className={styles.container}>
                {nonBunIngredientsList.map((item) => {
                    return (
                        <div className={styles.middleItemsList} key={item._id}>
                            <DragIcon type="primary"/>
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
                    text={bunItem.name + "(низ)"}
                    price={bunItem.price}
                    thumbnail={bunItem.image}
                />
            </section>
            <div className={styles.total}>
                <h2 className={styles.sum}>{sum}</h2>
                <CurrencyIcon type="primary"/>
                <button
                    className={styles.btn}
                    onClick={props.onOrderClick}
                >
                    Оформить заказ
                </button>
            </div>
        </div>
    )
}

BurgerConstructor.propTypes = BurgerIngredientsTypes

export default BurgerConstructor