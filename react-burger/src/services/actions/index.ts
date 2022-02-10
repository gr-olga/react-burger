import {getIngredientsData, getInitialOrder} from "../../api/api";

export const GET_INGREDIENTS_REQUEST: "GET_INGREDIENTS_REQUEST" = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS: 'GET_INGREDIENTS_SUCCESS' = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED: 'GET_INGREDIENTS_FAILED' = 'GET_INGREDIENTS_FAILED';
export const GET_ORDER_INGREDIENTS_REQUEST: 'GET_ORDER_INGREDIENTS_REQUEST' = 'GET_ORDER_INGREDIENTS_REQUEST';
export const GET_ORDER_INGREDIENTS_SUCCESS: 'GET_ORDER_INGREDIENTS_SUCCESS' = 'GET_ORDER_INGREDIENTS_SUCCESS';
export const GET_ORDER_INGREDIENTS_FAILED: 'GET_ORDER_INGREDIENTS_FAILED' = 'GET_ORDER_INGREDIENTS_FAILED';
export const ADD_INGREDIENT_TO_CONSTRUCTOR: 'ADD_INGREDIENT_TO_CONSTRUCTOR' = 'ADD_INGREDIENT_TO_CONSTRUCTOR';
export const ADD_INGREDIENT_TO_NON_BUN_ITEMS: 'ADD_INGREDIENT_TO_NON_BUN_ITEMS' = 'ADD_INGREDIENT_TO_NON_BUN_ITEMS';
export const REMOVE_INGREDIENT_FROM_CONSTRUCTOR: 'REMOVE_INGREDIENT_FROM_CONSTRUCTOR' = 'REMOVE_INGREDIENT_FROM_CONSTRUCTOR';
export const SHOW_INGREDIENT: 'SHOW_INGREDIENT' = 'SHOW_INGREDIENT';
export const INCREASE_COUNTER: 'INCREASE_COUNTER' = 'INCREASE_COUNTER';
export const DECREASE_COUNTER: 'DECREASE_COUNTER' = 'DECREASE_COUNTER';
export const MOVE_INSIDE_CONSTRUCTOR: 'MOVE_INSIDE_CONSTRUCTOR' = 'MOVE_INSIDE_CONSTRUCTOR';
export const CLOSE_MODAL: "CLOSE_MODAL" = 'CLOSE_MODAL';
export const REORDER_CONSTRUCTOR: "REORDER_CONSTRUCTOR" = 'REORDER_CONSTRUCTOR';

export interface getIngredientRequest {
    type: typeof GET_INGREDIENTS_REQUEST;
}

export interface getIngredientSuccess {
    type: typeof GET_INGREDIENTS_SUCCESS;
}

export interface getIngredientFailed {
    type: typeof GET_INGREDIENTS_FAILED;
}

export interface getOrderIngredientRequest {
    type: typeof GET_ORDER_INGREDIENTS_REQUEST;
}

export interface getOrderIngredientSuccess {
    type: typeof GET_ORDER_INGREDIENTS_SUCCESS;
    payload:
}

export interface getOrderIngredientFailed {
    type: typeof GET_ORDER_INGREDIENTS_FAILED;
}

export interface addIngredientToConstructor {
    type: typeof ADD_INGREDIENT_TO_CONSTRUCTOR;
}

export interface addIngredientToNonBunItems {
    type: typeof ADD_INGREDIENT_TO_NON_BUN_ITEMS;
}

export interface removeIngredientFromConstructor {
    type: typeof REMOVE_INGREDIENT_FROM_CONSTRUCTOR;
}

export interface showIngredient {
    type: typeof SHOW_INGREDIENT;
}

export interface increaseCounter {
    type: typeof INCREASE_COUNTER;
}

export interface decreaseCounter {
    type: typeof DECREASE_COUNTER;
}

export interface moveInsideConstructor {
    type: typeof MOVE_INSIDE_CONSTRUCTOR;
}

export interface closeModal {
    type: typeof CLOSE_MODAL;
}

export interface reorderConstructor {
    type: typeof REORDER_CONSTRUCTOR;
}

//     createAction('GET_INGREDIENTS_SUCCESS');
// export const getIngredientFailed =
//     createAction('GET_INGREDIENTS_FAILED');
//
// export const getOrderIngredientRequest =
//     createAction('GET_ORDER_INGREDIENTS_REQUEST');
// export const getOrderIngredientSuccess =
//     createAction('GET_ORDER_INGREDIENTS_SUCCESS');
// export const getOrderIngredientFailed =
//     createAction('GET_ORDER_INGREDIENTS_FAILED');

// export const addIngredientToConstructor =
//     createAction('ADD_INGREDIENT_TO_CONSTRUCTOR');

// export const addIngredientToNonBunItems =
//     createAction('ADD_INGREDIENT_TO_NON_BUN_ITEMS');
// export const removeIngredientFromConstructor =
//     createAction('REMOVE_INGREDIENT_FROM_CONSTRUCTOR');
//
// export const showIngredient =
//     createAction('SHOW_INGREDIENT');

// export const increaseCounter =
//     createAction('INCREASE_COUNTER');
// export const decreaseCounter =
//     createAction('DECREASE_COUNTER');

// export const moveInsideConstructor =
//     createAction('MOVE_INSIDE_CONSTRUCTOR');
//
// export const closeModal =
//     createAction('CLOSE_MODAL');
//
// export const reorderConstructor =
//     createAction('REORDER_CONSTRUCTOR');


export type TAction =
    | addIngredientToConstructor
    | addIngredientToNonBunItems
    | closeModal
    | decreaseCounter
    | getIngredientFailed
    | getIngredientRequest
    | getIngredientSuccess
    | getOrderIngredientFailed
    | getOrderIngredientRequest
    | getOrderIngredientSuccess
    | increaseCounter
    | moveInsideConstructor
    | removeIngredientFromConstructor
    | reorderConstructor
    | showIngredient


export function getIngredients() {
    return function (dispatch) {
        dispatch(GET_INGREDIENTS_REQUEST);
        getIngredientsData().then(res => {
            if (res && res.success) {
                dispatch({
                    GET_INGREDIENTS_SUCCESS,
                    ingredients: res.data
                });
            } else {
                dispatch(GET_INGREDIENTS_FAILED);
            }
        })
            .catch((err) => console.log("failed", err))
    };
}


export function getOrderIngredients(ingredientIds) {
    return function (dispatch) {
        dispatch(GET_ORDER_INGREDIENTS_REQUEST);
        getInitialOrder(ingredientIds).then(res => {
            if (res && res.success) {
                dispatch({
                    GET_ORDER_INGREDIENTS_SUCCESS,
                    order: res.order.number
                });
            } else {
                dispatch(GET_ORDER_INGREDIENTS_FAILED);
            }
        })
            .catch((err) => console.log("failed", err))
    };
}

// export function getIngredients() {
//     return function (dispatch:any) {
//         dispatch(getIngredientRequest);
//         getIngredientsData().then(res => {
//             if (res && res.success) {
//                 dispatch({
//                     getIngredientSuccess,
//                     ingredients: res.data
//                 });
//             } else {
//                 dispatch(getIngredientFailed);
//             }
//         })
//             .catch((err) => console.log("failed", err))
//     };
// }
//
//
// export function getOrderIngredients(ingredientIds:number) {
//     return function (dispatch:any) {
//         dispatch(getOrderIngredientRequest);
//         getInitialOrder(ingredientIds).then(res => {
//             if (res && res.success) {
//                 dispatch({
//                     getOrderIngredientSuccess,
//                     order: res.order.number
//                 });
//             } else {
//                 dispatch(getOrderIngredientFailed);
//             }
//         })
//             .catch((err) => console.log("failed", err))
//     };
// }