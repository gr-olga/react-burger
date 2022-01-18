import React, {useEffect, useState} from "react";
import styles from './burger-constructor.module.css'
import {ConstructorElement, CurrencyIcon, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import {BurgerIngredientsTypes} from "../../utils/types";
import {useDispatch, useSelector} from "react-redux";
import {useDrag, useDrop} from "react-dnd";
import {v4 as uuidv4} from 'uuid';
import bun from '../../images/bun01.png'
import {
    DECREASE_COUNTER,
    getOrderIngredients,
    MOVE_INSIDE_CONSTRUCTOR,
    REMOVE_INGREDIENT_FROM_CONSTRUCTOR
} from "../../services/actions";
import ConstructorItem from "../constructor-item/constructor-item";

function BurgerConstructor(props) {

    const {constructorIngredients} = useSelector(({ingredientsReducer}) => ingredientsReducer)
    const dispatch = useDispatch();

    const [sum, setSum] = useState(0);
   // const [nonBunIngredientsList, setNonBunIngredientsList] = React.useState([])
    const [bunItem, setBunItem] = React.useState({name: 'add bun', image: bun})

    useEffect(() => {
        // setNonBunIngredientsList(constructorIngredients.filter((item) => item.type === 'sauce' || item.type === 'main'))
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

    const [{isDrag}, dragItemRef] = useDrag({
        type: "primary",
         item: props,
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    });
    // const [, dropItemTarget] = useDrop({
    //     accept: "primary",
    //     drop(dropItemTarget) {
    //         dispatch({
    //             type: MOVE_INSIDE_CONSTRUCTOR
    //         })
    //     }
    // });
    // function removeIngredient(ingredient){
    //     dispatch({
    //         type: REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
    //         ingredient
    //     })
    //     dispatch({
    //         type: DECREASE_COUNTER,
    //         itemId: ingredient._id
    //     })
    // }
    //
    function handleOrderDetailClick() {
        dispatch(getOrderIngredients(constructorIngredients.map(item => item._id)))
    }
    useEffect(() => {
        const pricesList = constructorIngredients.map((item) => Number(item.price))
        let num = 0
        setSum(pricesList.reduce((a, b) => a + b, num))
    }, [constructorIngredients])


    // useEffect(() => {
    //     const pricesList = nonBunIngredientsList.map((item) => Number(item.price))
    //     let num = bunItem.price
    //     setSum(pricesList.reduce((a, b) => a + b, num))
    // }, [constructorIngredients, nonBunIngredientsList])

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
                // ref={dragItemRef}
            >
                <ConstructorItem/>
{/*                {nonBunIngredientsList.map((item) => {*/}
{/*                    return (*/}
{/*                      //  !isDrag &&*/}
{/*                        <div className={styles.middleItemsList} key={uuidv4()}*/}
{/*                             ref={dropItemTarget}*/}
{/*                        >*/}
{/*                            <DragIcon type="primary"/>*/}
{/*                            <ConstructorElement*/}
{/*                                isLocked={false}*/}
{/*                                text={item.name}*/}
{/*                                price={item.price}*/}
{/*                                thumbnail={item.image}*/}
{/*                                handleClose={()=> removeIngredient(item)}*/}
{/*/>*/}
{/*                        </div>*/}
{/*                    )*/}
{/*                })}*/}
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