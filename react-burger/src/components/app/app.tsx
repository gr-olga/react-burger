import React, {useEffect} from 'react';
import styles from './app.module.css';
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";
import AppHeader from "../header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import {useDispatch} from 'react-redux';
import {
    ADD_INGREDIENT_TO_CONSTRUCTOR,
    CLOSE_MODAL,
    getIngredients,
    INCREASE_COUNTER,
    SHOW_INGREDIENT
} from "../../services/actions";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {v4 as uuidv4} from "uuid";
import {TIngredient} from "../../utils/types";
import Register from "../enterence/enterence";
import Enterence from "../enterence/enterence";
import Registration from "../registration/registration";
import Entrance from "../enterence/enterence";
import ForgotPassword from "../forgot-password/forgot-password";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredients())
    }, [dispatch])

    function handleIngredientClick(item: TIngredient) {
        dispatch({type: SHOW_INGREDIENT, ingredient: item})
    }

    const handleDrop = (item: TIngredient) => {
        dispatch({type: ADD_INGREDIENT_TO_CONSTRUCTOR, ingredient: {...item, key: uuidv4()}})
        dispatch({type: INCREASE_COUNTER, itemId: item._id})
    };

    function closeModal() {
        dispatch({type: CLOSE_MODAL})
    }

    return (
        <div className={styles.app}>
            <AppHeader/>
            {/*<DndProvider backend={HTML5Backend}>*/}
            {/*    <div className={styles.bar}>*/}
            {/*        <BurgerIngredients*/}
            {/*            onIngredientClick={handleIngredientClick}*/}
            {/*        />*/}
            {/*        <BurgerConstructor*/}
            {/*            onDropHandler={handleDrop}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*</DndProvider>*/}
            {/*<Entrance/>*/}
            {/*<Registration/>*/}
            <ForgotPassword/>
            <IngredientDetails
                closeModal={closeModal}
            />
            <OrderDetails
                closeModal={closeModal}
            />
        </div>
    );
}

export default App;
