import React from 'react';
import './App.css';
import AppHeader from "./components/header/app-header";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";
import {data} from "./components/data";
import BurgerConstructor from "./components/burger-constructor/burger-constructor";


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
