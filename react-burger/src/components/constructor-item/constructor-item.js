import styles from "../burger-constructor/burger-constructor.module.css";
import {v4 as uuidv4} from "uuid";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useDrop} from "react-dnd";
import {
    DECREASE_COUNTER,
    MOVE_INSIDE_CONSTRUCTOR,
    REMOVE_INGREDIENT_FROM_CONSTRUCTOR
} from "../../services/actions";


export default  function ConstructorItem(){


    const {constructorIngredients} = useSelector(({ingredientsReducer}) => ingredientsReducer)
    const dispatch = useDispatch();
    const [nonBunIngredientsList, setNonBunIngredientsList] = React.useState([])

    useEffect(() => {
        setNonBunIngredientsList(constructorIngredients.filter((item) => item.type === 'sauce' || item.type === 'main'))
    }, [constructorIngredients])

    const [, dropItemTarget] = useDrop({
        accept: "primary",
        drop(dropItemTarget) {
            dispatch({
                type: MOVE_INSIDE_CONSTRUCTOR
            })
        }
    });

    function removeIngredient(ingredient){
        dispatch({
            type: REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
            ingredient
        })
        dispatch({
            type: DECREASE_COUNTER,
            itemId: ingredient._id
        })
    }

    return(
        <>
        {nonBunIngredientsList.map((item) => {
                return (
                    //  !isDrag &&
                    <div className={styles.middleItemsList} key={uuidv4()}
                         ref={dropItemTarget}
                    >
                        <DragIcon type="primary"/>
                        <ConstructorElement
                            isLocked={false}
                            text={item.name}
                            price={item.price}
                            thumbnail={item.image}
                            handleClose={()=> removeIngredient(item)}
                        />
                    </div>
                )
            })}
        </>
    )
}