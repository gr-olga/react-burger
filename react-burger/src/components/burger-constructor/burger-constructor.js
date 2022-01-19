import React, {useEffect, useState} from "react";
import styles from './burger-constructor.module.css'
import {ConstructorElement, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import {BurgerIngredientsTypes} from "../../utils/types";
import {useDispatch, useSelector} from "react-redux";
import {useDrop} from "react-dnd";
import bun from '../../images/bun01.png'
import {
    DECREASE_COUNTER,
    getOrderIngredients,
    MOVE_INSIDE_CONSTRUCTOR,
    REMOVE_INGREDIENT_FROM_CONSTRUCTOR
} from "../../services/actions";
import ConstructorItem from "../constructor-item/constructor-item";
import {v4 as uuidv4} from "uuid";

function BurgerConstructor(props) {

    const {constructorIngredients} = useSelector(({ingredientsReducer}) => ingredientsReducer)
    const dispatch = useDispatch();

    const [sum, setSum] = useState(0);
    const [nonBunIngredientsList, setNonBunIngredientsList] = React.useState([])
    const [bunItem, setBunItem] = React.useState({name: 'add bun', image: bun})

    useEffect(() => {
        console.log(constructorIngredients);
        setNonBunIngredientsList(constructorIngredients.filter((item) => item.type === 'sauce' || item.type === 'main'))
        const bun = constructorIngredients.find((item) => item.type === 'bun')
        if (bun) setBunItem(bun)
    }, [constructorIngredients])

    const [, dropTarget] = useDrop({
        accept: "item",
        drop(dropTarget) {
            props.onDropHandler(dropTarget);
            if (dropTarget.type === 'bun') {
                setBunItem(dropTarget)
            }
        },
    });

    function handleOrderDetailClick() {
        dispatch(getOrderIngredients(constructorIngredients.map(item => item._id)))
    }

    // useEffect(() => {
    //     const pricesList = constructorIngredients.map((item) => Number(item.price))
    //     let num = 0
    //     setSum(pricesList.reduce((a, b) => a + b, num))
    // }, [constructorIngredients])


    useEffect(() => {
        const pricesList = nonBunIngredientsList.map((item) => Number(item.price))
        let num = bunItem.price
        setSum(pricesList.reduce((a, b) => a + b, num))
    }, [constructorIngredients, nonBunIngredientsList])

    const [{handlerId}, dropItemTarget] = useDrop({
        accept: "primary",
        item: {},
        drop(dropItemTarget) {
            dispatch({
                type: MOVE_INSIDE_CONSTRUCTOR
            })
        }
    });

    // function removeIngredient(ingredient) {
    //     console.log(222, ingredient);
    //     dispatch({
    //         type: REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
    //         ingredient
    //     })
    //     dispatch({
    //         type: DECREASE_COUNTER,
    //         itemId: ingredient._id
    //     })
    // }

    const [items, setItem] = []
    const moveCard = (dragIndex, hoverIndex) => {
        const newIngredients = [...constructorIngredients]
        const dragCard = items[dragIndex];
        newIngredients.splice(hoverIndex, 0, newIngredients.splice(dragIndex, 1)[0]);
        dispatch({type: MOVE_INSIDE_CONSTRUCTOR})
    }


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

            <div className={styles.container}
                 ref={dropItemTarget}
            >
                {nonBunIngredientsList.map((item, index) => {
                    return (
                        <div key={uuidv4()}>
                            <div>{item._id}</div>
                            <ConstructorItem {...item}
                                             isLocked={false}
                                             index={index}
                                             text={item.name}
                                             price={item.price}
                                             thumbnail={item.image}
                                // removeIngredient={removeIngredient}
                                             // id={0}
                                             moveCard={moveCard}
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
                    onClick={handleOrderDetailClick}
                >
                    Оформить заказ
                </button>
            </div>
        </div>
    )
}

BurgerConstructor.propTypes = BurgerIngredientsTypes

export default BurgerConstructor