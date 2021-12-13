import React, {useEffect, useState} from 'react';
import styles from './app.module.css';
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import IngredientDetails from "../ingredient-details/ingredient-details";


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

    function handleClick(item) {
        setDetail(item)
    }

    function modalClose(){
        setOrderDetailsOpen(false)
        setIngredientDetailsOpen(false)
    }

    return (
        <div className={styles.app}>
            {/*<AppHeader/>*/}
            {/*<div className={styles.bar}>*/}
            <BurgerIngredients data={ingredients} onIngredientClick={handleClick}/>
            {/*    <BurgerConstructor data={ingredients}/>*/}
            {/*</div>*/}
            <IngredientDetails item={detail}/>
        </div>
    );
}

export default App;
