import styles from "./ingredient.module.css";
import React, {useEffect} from "react";
import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import {useDrag} from "react-dnd";
import {TConstructorItem, TIngredient, useSelector} from "../../utils/types";

function Ingredient(props: TIngredient) {

    const {counter, constructorIngredients} = useSelector(({ingredientsReducer}) => ingredientsReducer)

    const [{isDrag}, dragRef] = useDrag({
        type: "item",
        item: props,
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    });

    function handleClick() {
        props.onItemClick(props)
    }

    function isBunAdded(constructorIngredients: ReadonlyArray<TConstructorItem>): boolean {
        return constructorIngredients.findIndex((ing) => ing.type === 'bun' && ing._id === props._id) !== -1
    }

    return (
        <section
            onClick={handleClick}
            ref={dragRef}
        >
            <div className={styles.box}>
                <div className={styles.wrapper}>
                    <img className={styles.image} src={props.img} alt={props.name}/>
                    {counter[props._id] > 0 && props.type !== 'bun' &&
                      <Counter count={counter[props._id]} size="default"/>
                    }
                    {isBunAdded(constructorIngredients) &&
                     <Counter count={1} size="default"/>
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

export default Ingredient