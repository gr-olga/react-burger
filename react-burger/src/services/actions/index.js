import {getIngredientsData, getInitialOrder} from "../../api/api";

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export const GET_ORDER_INGREDIENTS_REQUEST = 'GET_ORDER_INGREDIENTS_REQUEST';
export const GET_ORDER_INGREDIENTS_SUCCESS = 'GET_ORDER_INGREDIENTS_SUCCESS';
export const GET_ORDER_INGREDIENTS_FAILED = 'GET_ORDER_INGREDIENTS_FAILED';

export const ADD_INGREDIENT_TO_CONSTRUCTOR = 'ADD_INGREDIENT_TO_CONSTRUCTOR';
export const REMOVE_INGREDIENT_TO_CONSTRUCTOR = 'REMOVE_INGREDIENT_TO_CONSTRUCTOR';

export const SHOW_INGREDIENT = 'SHOW_INGREDIENT';

export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const DECREASE_COUNTER = 'DECREASE_COUNTER';


export const MOVE_INSIDE_CONSTRUCTOR = 'MOVE_INSIDE_CONSTRUCTOR';

export const CLOSE_MODAL = 'CLOSE_MODAL';

export function getIngredients() {
    return function (dispatch) {
        dispatch({
            type: GET_INGREDIENTS_REQUEST
        });
        getIngredientsData().then(res => {
            if (res && res.success) {
                dispatch({
                    type: GET_INGREDIENTS_SUCCESS,
                    ingredients: res.data
                });
            } else {
                dispatch({
                    type: GET_INGREDIENTS_FAILED
                });
            }
        });
    };
}


export function getOrderIngredients() {
    return function (dispatch) {
        dispatch({
            type: GET_ORDER_INGREDIENTS_REQUEST
        });
        getInitialOrder().then(res => {
            if (res && res.success) {
                dispatch({
                    type: GET_ORDER_INGREDIENTS_SUCCESS,
                    order: res.data
                });
            } else {
                dispatch({
                    type: GET_ORDER_INGREDIENTS_FAILED
                });
            }
        });
    };
}

