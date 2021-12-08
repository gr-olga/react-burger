import React from 'react';
import './app.module.css';
import AppHeader from "../header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import {data} from "../utils/data";
import BurgerConstructor from "../burger-constructor/burger-constructor";


function App() {
    return (
        <div className="App">
            <AppHeader className="App-header"/>
            <div className='bar'>
                <BurgerIngredients data={data}/>
                <BurgerConstructor data={data}/>
            </div>
        </div>
    );
}

export default App;
