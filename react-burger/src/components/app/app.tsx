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
import {BrowserRouter as Router, Route, Switch, useLocation} from "react-router-dom";
import {NotFoundPage} from "../../pages/not-found-page/not-found-page";
import OrderFeed from "../../pages/order-feed/order-feed";
import {ProtectedRoute} from ".././protected-route/protected-route";
import {NonLoginRoute} from "../non-login-route/non-login-route";
import Modal from "../modal/modal";

function App() {
    let location: any = useLocation()
    let background = location.state && location.state.background

    // isPush = history.action === "PUSH";
    // const background = isPush &&   location.state && location.state.background;
    const dispatch = useDispatch();

    // const history = useHistory();

    useEffect(() => {
        dispatch(getIngredients())
    }, [dispatch])

    function handleIngredientClick(item: TIngredient) {
        dispatch({type: SHOW_INGREDIENT, ingredient: item})
    }

    const handleDrop = (item: TIngredient) => {
        dispatch({type: ADD_INGREDIENT_TO_CONSTRUCTOR, ingredient: {...item, key: uuidv4()}})
        dispatch({type: INCREASE_COUNTER, itemId: item._id})
    };

    function closeModal() {
        dispatch({type: CLOSE_MODAL})
    }

    const {
        isOrderDetailsOpen,
        isIngredientDetailsOpen,
        ingredients
    } = useSelector(({ingredientsReducer}) => ingredientsReducer)

    return (
        <div className={styles.app}>
            <Router>
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
                    <NonLoginRoute path='/login' exact={true}>
                        <Entrance/>
                    </NonLoginRoute>
                    <NonLoginRoute path='/register' exact={true}>
                        <Registration/>
                    </NonLoginRoute>
                    <NonLoginRoute path='/forgot-password' exact={true}>
                        <ForgotPassword/>
                    </NonLoginRoute>
                    <NonLoginRoute path='/password-recovery' exact={true}>
                        <PasswordRecovery/>
                    </NonLoginRoute>
                    <ProtectedRoute path='/profile' exact={true}>
                        <UserProfile/>
                    </ProtectedRoute>
                    <ProtectedRoute path='/order' exact={true}>
                        <OrderFeed/>
                    </ProtectedRoute>
                    <Route path="/ingredient/:id" exact={true}>
                        <IngredientDetails/>
                    </Route>
                    <Route>
                        <NotFoundPage/>
                    </Route>
                </Switch>
                <div>1111232444123213 {String(isIngredientDetailsOpen)}</div>
                {isIngredientDetailsOpen && <Route path="/ingredient/:id">
                    <Modal closeModal={closeModal}
                           title={'Детали ингредиента'}
                           isOpen={isIngredientDetailsOpen}
                    >
                        <IngredientDetails/>
                    </Modal>
                </Route>}
                <OrderDetails
                    closeModal={closeModal}
                />
            </Router>
        </div>
    );
}

export default App;
