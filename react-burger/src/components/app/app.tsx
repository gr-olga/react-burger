import React, {useEffect} from 'react';
import styles from './app.module.css';
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";
import AppHeader from "../header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import {useDispatch} from 'react-redux';
import {
    ADD_INGREDIENT_TO_CONSTRUCTOR,
    CLOSE_MODAL,
    getIngredients,
    INCREASE_COUNTER,
    SHOW_INGREDIENT
} from "../../services/actions";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {v4 as uuidv4} from "uuid";
import {TIngredient, useSelector} from "../../utils/types";
import Entrance from "../../pages/enterence/enterence";
import Registration from "../../pages/registration/registration";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import PasswordRecovery from "../../pages/password-recovery/password-recovery";
import UserProfile from "../../pages/user-profile/user-profile";
import {Route, Switch, useHistory, useLocation} from "react-router-dom";
import {NotFoundPage} from "../../pages/not-found-page/not-found-page";
import OrderFeed from "../../pages/order-feed/order-feed";
import {ProtectedRoute} from "../protected-route/protected-route";
import {NonLoginRoute} from "../non-login-route/non-login-route";
import Modal from "../modal/modal";

function App() {
    let history = useHistory();
    let location: any = useLocation()
    let background =
        history.action === 'PUSH' && location.state && location.state.background;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredients())
    }, [dispatch])

    function handleIngredientClick(item: TIngredient) {
        dispatch({type: SHOW_INGREDIENT, ingredient: item})
    }


    const handleDrop = (item: TIngredient) => {
        dispatch({type: INCREASE_COUNTER, itemId: item._id})
        dispatch({type: ADD_INGREDIENT_TO_CONSTRUCTOR, ingredient: {...item, key: uuidv4()}})
    }


    function closeModal() {
        dispatch({type: CLOSE_MODAL})
        history.goBack();
    }

    const {
        isIngredientDetailsOpen,
    } = useSelector(({ingredientsReducer}) => ingredientsReducer)

    return (
        <div className={styles.app}>
            <AppHeader/>
            <Switch location={background || location}>
                <Route path="/" exact={true}>
                    <DndProvider backend={HTML5Backend}>
                        <div className={styles.bar}>
                            <BurgerIngredients
                                onIngredientClick={handleIngredientClick}
                            />
                            <BurgerConstructor
                                onDropHandler={handleDrop}
                            />
                        </div>
                    </DndProvider>
                </Route>
                <NonLoginRoute path='/login'>
                    <Entrance/>
                </NonLoginRoute>
                <NonLoginRoute path='/register'>
                    <Registration/>
                </NonLoginRoute>
                <NonLoginRoute path='/forgot-password'>
                    <ForgotPassword/>
                </NonLoginRoute>
                <NonLoginRoute path='/password-recovery'>
                    <PasswordRecovery/>
                </NonLoginRoute>
                <ProtectedRoute path='/profile'>
                    <UserProfile/>
                </ProtectedRoute>
                <ProtectedRoute path='/order'>
                    <OrderFeed/>
                </ProtectedRoute>
                <Route path="/ingredient/:id">
                    <IngredientDetails/>
                </Route>
                <Route>
                    <NotFoundPage/>
                </Route>
            </Switch>
            {background && <Route path="/ingredient/:id"
                                  children={<Modal closeModal={closeModal}
                                                   title={'Детали ингредиента'}
                                                   isOpen={isIngredientDetailsOpen}
                                  >
                                      <IngredientDetails/>
                                  </Modal>}
            />}
            <OrderDetails
                closeModal={closeModal}
            />
        </div>
    );
}

export default App;
