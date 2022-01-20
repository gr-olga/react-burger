import React, {useEffect, useState} from "react";
import styles from './burger-constructor.module.css'
import {ConstructorElement, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import {BurgerIngredientsTypes} from "../../utils/types";
import {useDispatch, useSelector} from "react-redux";
import {useDrop} from "react-dnd";
import bun from '../../images/bun01.png'
import {getOrderIngredients} from "../../services/actions";
import ConstructorItem from "../constructor-item/constructor-item";
import {v4 as uuidv4} from "uuid";

function BurgerConstructor(props) {

    // const ref = useRef()

    const {constructorIngredients} = useSelector(({ingredientsReducer}) => ingredientsReducer)
    const dispatch = useDispatch();

    const [sum, setSum] = useState(0);
    const [nonBunIngredientsList, setNonBunIngredientsList] = React.useState([])
    const [bunItem, setBunItem] = React.useState({name: 'add bun', image: bun})

    useEffect(() => {
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
    }, [constructorIngredients, nonBunIngredientsList, bunItem])


    // const [{handlerId}, dropItemTarget] = useDrop({
    //     accept: "primary",
    //     collect(monitor) {
    //         console.log('11 ', monitor);
    //         return {
    //             isDrag: monitor.getHandlerId(),
    //         };
    //     },
    //     // drop(dropItemTarget) {
    //     //     // console.log('22 ', dropItemTarget);
    //     //     dispatch({
    //     //         type: MOVE_INSIDE_CONSTRUCTOR
    //     //     })
    //     // },
    //     hover(item, monitor) {
    //         const dragIndex = item.index;
    //         const hoverIndex = item.id;
    //         console.log(monitor);
    //         // if (dragIndex === hoverIndex) {
    //         //     return;
    //         // }
    //         const hoverBoundingRect = ref.current?.getBoundingClientRect();
    //         const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    //         const clientOffset = monitor.getClientOffset();
    //         const hoverClientY = clientOffset.y - hoverBoundingRect.top;
    //         if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
    //             return;
    //         }
    //         if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
    //             return;
    //         }
    //         dispatch({type: MOVE_INSIDE_CONSTRUCTOR, dragIndex, hoverIndex})
    //         item.index = hoverIndex;
    //     },
    // });


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
                //  ref={dropItemTarget}
            >
                {nonBunIngredientsList.map((item, index) => {
                    return (
                        <div key={uuidv4()}
                        >
                            <div>{item._id}</div>
                            <ConstructorItem {...item}
                                             key={uuidv4()}
                                             isLocked={false}
                                             index={index}
                                             text={item.name}
                                             price={item.price}
                                             thumbnail={item.image}
                                // removeIngredient={removeIngredient}

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