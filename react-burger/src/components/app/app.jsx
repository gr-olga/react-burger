import React, {useEffect, useState} from 'react';
import styles from './app.module.css';
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";
import AppHeader from "../header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import {useDispatch, useSelector} from 'react-redux';
import {ADD_INGREDIENT_TO_CONSTRUCTOR, getIngredients, getOrderIngredients} from "../../services/actions";


function App() {
    // const [ingredients, setIngredients] = useState([])
    //  const [detail, setDetail] = useState(undefined)
    // const [order, setOrder] = useState(undefined)

    const [isOrderDetailsOpen, setOrderDetailsOpen] = useState(false)
    const [isIngredientDetailsOpen, setIngredientDetailsOpen] = useState(false)

    const {ingredients, order, ingredientDetail} = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredients())
    }, [dispatch])

    function handleIngredientClick(item) {
        // setIngredientDetailsOpen(true)
        dispatch({type: ADD_INGREDIENT_TO_CONSTRUCTOR, ingredient: item})
        //  ingredientItemReducer()
        // setDetail(item)
    }

    function handleOrderDetailClick() {
        setOrderDetailsOpen(true)
        dispatch(getOrderIngredients())

        // getInitialOrder(ingredients.map(item => item._id))
        //     .then(({order}) => setOrder(order.number))
    }


    function modalClose() {
        setOrderDetailsOpen(false)
        setIngredientDetailsOpen(false)
    }

    return (
        <div className={styles.app}>
            <AppHeader/>
            <div className={styles.bar}>
                <BurgerIngredients
                    onIngredientClick={handleIngredientClick}
                />
                <BurgerConstructor
                    onOrderClick={handleOrderDetailClick}
                />
            </div>
            <IngredientDetails
                item={ingredientDetail}
                isOpen={isIngredientDetailsOpen}
                onClose={modalClose}
            />
            <OrderDetails
                order={order}
                isOpen={isOrderDetailsOpen}
                onClose={modalClose}
            />

        </div>
    );
}

export default App;
