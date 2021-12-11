import React, {useEffect, useState} from 'react';
import styles from './app.module.css';
import AppHeader from "../header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";

import BurgerConstructor from "../burger-constructor/burger-constructor";


function App() {
    const baseUrl = "https://norma.nomoreparties.space/api/ingredients"
    const [ingredients, setIngredients] = useState([])

    function getIngredientsData(baseUrl) {
        return fetch(baseUrl)
            .then((res) => {
                return (res.json());
            })
            .then(({data}) => {
                setIngredients(data);
            })
            .catch((err)=>{
                console.log("failed",err);
            })
    }

    useEffect(() => {
        getIngredientsData(baseUrl)
    },[])

    return (
        <div className={styles.app}>
            <AppHeader/>
            <div className={styles.bar}>
                <BurgerIngredients data={ingredients}/>
                <BurgerConstructor data={ingredients}/>
            </div>
        </div>
    );
}

export default App;
