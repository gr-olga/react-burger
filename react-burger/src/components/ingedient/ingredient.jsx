import styles from "./ingredient.module.css";
import React, {useState} from "react";
import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import {IngredientDetailsTypes} from "../../utils/types";
import {useDrag} from "react-dnd";
import {useSelector} from "react-redux";


function Ingredient(props) {

    const {counter} = useSelector(({ingredientsReducer}) => ingredientsReducer)

    const [{isDrag}, dragRef] = useDrag({
        type: "item",
        item: props,
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    });


    return (
        !isDrag &&
        <section
            ref={dragRef}
        >
            <div className={styles.box}>
                <div className={styles.wrapper}>
                    <img className={styles.image} src={props.img} alt={props.name}/>
                    {counter[props._id] > 0 &&
                    <Counter count={counter[props._id]} size="default"/>
                    }
                </div>
                <h3 className={styles.price}>
                    <p className={styles.number}>{props.price}</p>
                    <CurrencyIcon type="primary"/>
                </h3>
                <h4 className={styles.name}>{props.name}</h4>
            </div>
        </section>
    )
}

Ingredient.propTypes = IngredientDetailsTypes;

export default Ingredient