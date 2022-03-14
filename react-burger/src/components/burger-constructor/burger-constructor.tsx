import React, {useEffect, useState} from "react";
import styles from './burger-constructor.module.css'
import {ConstructorElement, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import {BurgerConstructorTypes, TIngredient, useSelector} from "../../utils/types";
import {useDispatch} from 'react-redux';
import {useDrop} from "react-dnd";
import bun from '../../images/bun01.png'
import {ADD_INGREDIENT_TO_NON_BUN_ITEMS, getOrderIngredients} from "../../services/actions";
import ConstructorItem from "../constructor-item/constructor-item";
import {getCookie} from "../../utils/cookies-helpers";
import {useHistory} from "react-router-dom";


function BurgerConstructor(props: BurgerConstructorTypes) {
  const history = useHistory()
    const {
        constructorIngredients,
        nonBunIngredientsList,
    } = useSelector(({ingredientsReducer}) => ingredientsReducer)
    const dispatch = useDispatch();

    const [sum, setSum] = useState(0);
    const [bunItem, setBunItem] = React.useState({name: 'add bun', image: bun, price: 0})

    useEffect(() => {
        dispatch({
            type: ADD_INGREDIENT_TO_NON_BUN_ITEMS,
            items: constructorIngredients.filter((item) => item.type === 'sauce' || item.type === 'main')
        })
        const bun = constructorIngredients.find((item) => item.type === 'bun')
        if (bun) setBunItem(bun)
    }, [constructorIngredients, dispatch])

    const [, dropTarget] = useDrop({
        accept: "item",
        drop(dropTarget: TIngredient) {
           props.onDropHandler(dropTarget)
            if (dropTarget.type === 'bun') {
                setBunItem(dropTarget)
            }
        }
    });

    function handleOrderDetailClick() {
        const token = getCookie('accessToken');
        if (!token) {
           history.push( "/login")
        }
        else
        dispatch(getOrderIngredients(constructorIngredients.map((item) => item._id)))
    }


    useEffect(() => {
        const pricesList = nonBunIngredientsList.map((item) => Number(item.price))
        let num = bunItem.price
        setSum(pricesList.reduce((a, b) => a + b, num))
    }, [constructorIngredients, nonBunIngredientsList, bunItem])


    return (
        <div className={styles.box}
             ref={dropTarget}
        >
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
                {nonBunIngredientsList.map((item, index) => {
                    return (
                        <ConstructorItem {...item} index={index}/>
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
                    onClick={handleOrderDetailClick}
                >
                    Оформить заказ
                </button>
            </div>
        </div>
    )
}

//BurgerConstructor.propTypes = BurgerConstructorTypes

export default BurgerConstructor