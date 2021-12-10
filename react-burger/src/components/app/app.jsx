import React from 'react';
import styles from './app.module.css';
import AppHeader from "../header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import {data} from "../utils/data";
import BurgerConstructor from "../burger-constructor/burger-constructor";


function App() {
    const baseUrl = "https://norma.nomoreparties.space/api/ingredients"

    function getIngredientsData(baseUrl){
        return fetch(baseUrl,{

        })
    }

    return (
        <div className={styles.app}>
            <AppHeader/>
            <div className={styles.bar}>
                <BurgerIngredients data={data}/>
                <BurgerConstructor data={data}/>
            </div>
        </div>
    );
}

export default App;
