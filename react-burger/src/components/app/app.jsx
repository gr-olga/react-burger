import React, {useEffect, useState} from 'react';
import styles from './app.module.css';
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";
import AppHeader from "../header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import {BurgerContext} from "../../services/BurgerContext"
import { useSelector, useDispatch } from 'react-redux';
import {getIngredientsData, getInitialOrder} from "../../api/api";
import {getIngredients} from "../../services/actions";


function App() {
   // const [ingredients, setIngredients] = useState([])
    const [detail, setDetail] = useState(undefined)
   // const [order, setOrder] = useState(undefined)

    const [isOrderDetailsOpen, setOrderDetailsOpen] = useState(false)
    const [isIngredientDetailsOpen, setIngredientDetailsOpen] = useState(false)

    const { ingredients, order  } = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => {
    //     getIngredientsData()
    //         .then(({data}) => {
    //             setIngredients(data);
    //         })
    // }, [])
        dispatch(getIngredients())
    }, [dispatch])

    function handleIngredientClick(item) {
        setIngredientDetailsOpen(true)
        setDetail(item)
    }

    function handleOrderDetailClick() {
        setOrderDetailsOpen(true)
        // getInitialOrder(ingredients.map(item => item._id))
        //     .then(({order}) => setOrder(order.number))
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
            </BurgerContext.Provider>
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

        </div>
    );
}

export default App;
