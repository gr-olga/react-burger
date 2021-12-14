import React, {useEffect, useState} from 'react';
import styles from './app.module.css';
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";
import AppHeader from "../header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";


function App() {
    const baseUrl = "https://norma.nomoreparties.space/api/ingredients"
    const [ingredients, setIngredients] = useState([])
    const [detail, setDetail] = useState(undefined)

    const [isOrderDetailsOpen, setOrderDetailsOpen] = useState(false)
    const [isIngredientDetailsOpen, setIngredientDetailsOpen] = useState(false)

    function getIngredientsData(baseUrl) {
        return fetch(baseUrl)
            .then((res) => (res.json()))
            .then(({data}) => data)
            .catch((err) => console.log("failed", err))
    }

    useEffect(() => {
        getIngredientsData(baseUrl).then(data => setIngredients(data))
    }, [])

    function handleIngredientClick(item) {
        setIngredientDetailsOpen(true)
        setDetail(item)
    }

    function handleOrderDetailClick() {
        setOrderDetailsOpen(true)
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
                    data={ingredients}
                    onIngredientClick={handleIngredientClick}
                />
                <BurgerConstructor
                    data={ingredients}
                    onOrderClick={handleOrderDetailClick}
                />
            </div>
            <IngredientDetails
                item={detail}
                isOpen={isIngredientDetailsOpen}
                onClose={modalClose}
            />
            <OrderDetails
                isOpen={isOrderDetailsOpen}
                onClose={modalClose}
            />
        </div>
    );
}

export default App;
