import {combineReducers} from 'redux';
import {
    ADD_INGREDIENT_TO_CONSTRUCTOR,
    ADD_INGREDIENT_TO_NON_BUN_ITEMS,
    CLOSE_MODAL,
    DECREASE_COUNTER,
    GET_INGREDIENTS_FAILED,
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_ORDER_INGREDIENTS_FAILED,
    GET_ORDER_INGREDIENTS_REQUEST,
    GET_ORDER_INGREDIENTS_SUCCESS,
    INCREASE_COUNTER,
    MOVE_INSIDE_CONSTRUCTOR,
    REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
    REORDER_CONSTRUCTOR,
    SHOW_INGREDIENT,
    TAction
} from '../actions'
import {changeOrder} from "../../utils/array-helper";
import {TConstructorItem, TState} from "../../utils/types";
import {userReducer} from "./auth";

export const initialState: TState = {
    ingredientIds: [],
    ingredients: [],
    constructorIngredients: [],
    nonBunIngredientsList: [],
    dragContainer: [],
    ingredientDetail: {},
    order: null,
    isOrderDetailsOpen: false,
    isIngredientDetailsOpen: false,
    loader: true,
    counter: {},
    itemsRequest: false
};

export const ingredientsReducer = (state: TState = initialState, action: TAction): TState => {
    switch (action.type) {
        case GET_INGREDIENTS_REQUEST: {
            return {
                ...state,
                itemsRequest: true
            };
        }
        case GET_INGREDIENTS_SUCCESS: {
            return {...state, loader: false, ingredients: action.ingredients};
        }
        case GET_INGREDIENTS_FAILED: {
            return {...state, loader: true};
        }
        default: {
            return state
        }

        case GET_ORDER_INGREDIENTS_REQUEST: {
            return {
                ...state,
                ingredientIds: action.ingredientIds,
            }
        }
        case GET_ORDER_INGREDIENTS_SUCCESS: {
            return {
                ...state,
                order: action.order,
                isOrderDetailsOpen: true
            };
        }
        case GET_ORDER_INGREDIENTS_FAILED: {
            return {...state, loader: true};
        }
        case ADD_INGREDIENT_TO_CONSTRUCTOR: {
            return {
                ...state,
                constructorIngredients: [...state.constructorIngredients, action.ingredient]
            };
        }
        case ADD_INGREDIENT_TO_NON_BUN_ITEMS: {
            return {...state, nonBunIngredientsList: action.items};
        }
        case REMOVE_INGREDIENT_FROM_CONSTRUCTOR: {
            return {
                ...state,
                dragContainer: state.nonBunIngredientsList.filter((item: TConstructorItem, index: number) => index !== action.index),
                //TODO action.value.index need value or not
            };
        }
        case SHOW_INGREDIENT: {
            console.log(212312);
            return {
                ...state,
                isIngredientDetailsOpen: true,
                ingredientDetail: action.ingredient
            };
        }
        case CLOSE_MODAL: {
            return {
                ...state,
                isIngredientDetailsOpen: false,
                isOrderDetailsOpen: false,
                ingredientDetail: {}
            };
        }
        case REORDER_CONSTRUCTOR: {
            return {
                ...state,
                dragContainer: changeOrder(state.nonBunIngredientsList, action.dragIndex, action.hoverIndex)
            };
        }

        case MOVE_INSIDE_CONSTRUCTOR: {
            return {...state, constructorIngredients: [state.constructorIngredients[0], ...state.dragContainer]};
        }

        case INCREASE_COUNTER: {
                const prevValue = state.counter[action.itemId] ? state.counter[action.itemId] : 0;
                return {...state, counter: {...state.counter, [action.itemId]: prevValue + 1}};
        }

        case DECREASE_COUNTER: {
            const prevValue = state.counter[action.itemId] ? state.counter[action.itemId] : 1;
            return {...state, counter: {...state.counter, [action.itemId]: prevValue - 1}};
        }
    }
}

export const rootReducer = combineReducers({ingredientsReducer, userReducer})