import React from 'react';
import './App.css';
import AppHeader from "./components/header/app-header";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";


function App() {
  return (
    <div className="App">
      <AppHeader className="App-header"/>
     <BurgerIngredients/>
    </div>
  );
}

export default App;
