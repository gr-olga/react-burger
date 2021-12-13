import React, {useEffect, useState} from 'react';
import styles from './app.module.css';
import AppHeader from "../header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import ModalOverlay from "../modal-overlay/modal-overlay";
import OrderDetails from "../order-details/order-details";



function App() {
    const baseUrl = "https://norma.nomoreparties.space/api/ingredients"
    const [ingredients, setIngredients] = useState([])

    function getIngredientsData(baseUrl) {
        return fetch(baseUrl)
            .then((res) => (res.json()))
            .then(({data}) => data)
            .catch((err) => console.log("failed", err))
    }

    useEffect(() => {
        getIngredientsData(baseUrl).then(data => setIngredients(data))
    }, [])

    return (
        <div className={styles.app}>
            {/*<AppHeader/>*/}
            {/*<div className={styles.bar}>*/}
            {/*    <BurgerIngredients data={ingredients}/>*/}
            {/*    <BurgerConstructor data={ingredients}/>*/}
            {/*</div>*/}
             <OrderDetails/>
        </div>
    );
}

export default App;
