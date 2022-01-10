import React, {useEffect, useState} from 'react';
import styles from './app.module.css';
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";
import AppHeader from "../header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import {BurgerContext} from "../../context/BurgerContext"

import {baseUrl, getIngredientsData, getInitialOrder} from "../../api/api";
import {data} from "../utils/data";

function App() {
    // const baseUrl = "https://norma.nomoreparties.space/api/ingredients"
    const [ingredients, setIngredients] = useState([])
    const [detail, setDetail] = useState(undefined)
    const [order, setOrder] = useState(undefined)

    const [isOrderDetailsOpen, setOrderDetailsOpen] = useState(false)
    const [isIngredientDetailsOpen, setIngredientDetailsOpen] = useState(false)

    // function getIngredientsData(baseUrl) {
    //     return fetch(baseUrl)
    //         .then((res) => (res.json()))
    //         .then(({data}) => setIngredients(data))
    //         .catch((err) => console.log("failed", err))
    // }

    useEffect(() => {
        getIngredientsData(baseUrl)
            .then(({data}) => setIngredients(data))
    }, [])

    function handleIngredientClick(item) {
        setIngredientDetailsOpen(true)
        setDetail(item)
    }

    function handleOrderDetailClick() {
        setOrderDetailsOpen(true)
        console.log(ingredients)
        getInitialOrder(ingredients.map(item => item._id))
    }



    function modalClose() {
        setOrderDetailsOpen(false)
        setIngredientDetailsOpen(false)
    }

    return (
        <div className={styles.app}>
            <AppHeader/>
            <BurgerContext.Provider value={ingredients}>
            <div className={styles.bar}>
                <BurgerIngredients
                    onIngredientClick={handleIngredientClick}
                />
                <BurgerConstructor
                    onOrderClick={handleOrderDetailClick}
                />
            </div>
            <IngredientDetails
                item={detail}
                isOpen={isIngredientDetailsOpen}
                onClose={modalClose}
            />
            <OrderDetails
                order={order}
                isOpen={isOrderDetailsOpen}
                onClose={modalClose}
            />
            </BurgerContext.Provider>
        </div>
    );
}

export default App;
