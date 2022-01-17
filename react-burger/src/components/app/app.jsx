import React, {useEffect, useState} from 'react';
import styles from './app.module.css';
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";
import AppHeader from "../header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import {useDispatch, useSelector} from 'react-redux';
import {
    ADD_INGREDIENT_TO_CONSTRUCTOR,
    getIngredients,
    getOrderIngredients,
    INCREASE_COUNTER, SHOW_INGREDIENT
} from "../../services/actions";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";


function App() {
    // const [ingredients, setIngredients] = useState([])
    //  const [detail, setDetail] = useState(undefined)
    // const [order, setOrder] = useState(undefined)

   // const [isOrderDetailsOpen, setOrderDetailsOpen] = useState(false)
    //const [isIngredientDetailsOpen, setIngredientDetailsOpen] = useState(false)

   const {ingredients, order, ingredientDetail, isIngredientDetailsOpen, isOrderDetailsOpen} = useSelector(state => state)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredients())
    }, [dispatch])

    function handleIngredientClick(item) {
        dispatch({type: SHOW_INGREDIENT, ingredient: item})
    }

    // function handleOrderDetailClick() {
    //   //  setOrderDetailsOpen(true)
    //     dispatch(getOrderIngredients())
    // }

    const handleDrop = (item) => {
        dispatch({type: ADD_INGREDIENT_TO_CONSTRUCTOR, ingredient: item})
        dispatch({type: INCREASE_COUNTER, itemId: item._id})
    };

    return (
        <div className={styles.app}>
            <AppHeader/>
            <DndProvider backend={HTML5Backend}>
            <div className={styles.bar}>
                <BurgerIngredients
                    onIngredientClick={handleIngredientClick}
                />
                <BurgerConstructor
                    onDropHandler={handleDrop}
                 //  onOrderClick={handleOrderDetailClick}
                />
            </div>
            </DndProvider>
            <IngredientDetails
            />
            <OrderDetails
                order={order}
                isOpen={isOrderDetailsOpen}
            />

        </div>
    );
}

export default App;
