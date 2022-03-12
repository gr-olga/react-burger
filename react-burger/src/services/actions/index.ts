import {getIngredientsData, getInitialOrder} from "../../api/api";
import {
    AppDispatch,
    AppThunk,
    TClearIngredient,
    TIngredient,
    TIngredientDetail,
    TIngredientForConstructor,
    TOrder
} from "../../utils/types";
import {removeUser, TAuthAction} from "./auth";

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
export const INCREASE_BUN_COUNTER: "INCREASE_BUN_COUNTER" = "INCREASE_BUN_COUNTER"

export interface getIngredientRequest {
    type: typeof GET_INGREDIENTS_REQUEST;
}

export interface getIngredientSuccess {
    type: typeof GET_INGREDIENTS_SUCCESS;
    ingredients: Array<TClearIngredient>
}

export interface getIngredientFailed {
    type: typeof GET_INGREDIENTS_FAILED;
}

export interface getOrderIngredientRequest {
    type: typeof GET_ORDER_INGREDIENTS_REQUEST;
    ingredientIds: Array<number>
}

export interface getOrderIngredientSuccess {
    type: typeof GET_ORDER_INGREDIENTS_SUCCESS;
    order: TOrder
}

export interface getOrderIngredientFailed {
    type: typeof GET_ORDER_INGREDIENTS_FAILED;
}

export interface addIngredientToConstructor {
    type: typeof ADD_INGREDIENT_TO_CONSTRUCTOR;
    ingredient: TIngredientForConstructor
}

export interface addIngredientToNonBunItems {
    type: typeof ADD_INGREDIENT_TO_NON_BUN_ITEMS;
    items: Array<TIngredientForConstructor>
}

export interface removeIngredientFromConstructor {
    type: typeof REMOVE_INGREDIENT_FROM_CONSTRUCTOR;
    index: number
    value: any
}

export interface showIngredient {
    type: typeof SHOW_INGREDIENT;
    ingredient: TIngredientDetail
}

export interface increaseCounter {
    type: typeof INCREASE_COUNTER;
    itemId: number
}

export interface decreaseCounter {
    type: typeof DECREASE_COUNTER;
    itemId: number
}

export interface moveInsideConstructor {
    type: typeof MOVE_INSIDE_CONSTRUCTOR;
}

export interface closeModal {
    type: typeof CLOSE_MODAL;
}

export interface reorderConstructor {
    type: typeof REORDER_CONSTRUCTOR;
    dragIndex: number
    hoverIndex: number
}

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
    | TAuthAction
    | removeUser

const getIngredientRequest = (): getIngredientRequest => ({
    type: GET_INGREDIENTS_REQUEST
})

const getIngredientSuccess = (ingredients: Array<TIngredient>): getIngredientSuccess => ({
    type: GET_INGREDIENTS_SUCCESS,
    ingredients
})

const getIngredientFailed = (): getIngredientFailed => ({
    type: GET_INGREDIENTS_FAILED,
})

export const getIngredients: AppThunk = () => (dispatch: AppDispatch) => {
    // return function (dispatch: any) {
    dispatch(getIngredientRequest());
    getIngredientsData().then(res => {
        if (res && res.success) {
            dispatch(
                getIngredientSuccess(res.data),
                //  ingredients: res.data
            );
        } else {
            dispatch(getIngredientFailed());
        }
    })
        .catch((err) => console.log("failed", err))
    // };
}

const getOrderIngredientRequest = (ingredientIds: Array<number>): getOrderIngredientRequest => ({
    type: GET_ORDER_INGREDIENTS_REQUEST,
    ingredientIds
})
const getOrderIngredientSuccess = (order: TOrder): getOrderIngredientSuccess => ({
    type: GET_ORDER_INGREDIENTS_SUCCESS,
    order
})
const getOrderIngredientFailed = (): getOrderIngredientFailed => ({
    type: GET_ORDER_INGREDIENTS_FAILED,
})

export const getOrderIngredients: AppThunk = (ingredientIds: Array<number>) => (dispatch: AppDispatch) => {
    // return function (dispatch: any) {
    dispatch(getOrderIngredientRequest(ingredientIds));
    getInitialOrder(ingredientIds).then(res => {
        if (res && res.success) {
            dispatch(getOrderIngredientSuccess(res.order.number)
            );
        } else {
            dispatch(getOrderIngredientFailed());
        }
    })
        .catch((err) => console.log("failed", err))
    //   };
}


