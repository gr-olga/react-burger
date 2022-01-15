import {combineReducers} from 'redux';
import {
    ADD_INGREDIENT_TO_CONSTRUCTOR,
    GET_INGREDIENTS_FAILED,
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_ORDER_INGREDIENTS_FAILED,
    GET_ORDER_INGREDIENTS_REQUEST,
    GET_ORDER_INGREDIENTS_SUCCESS,
    SHOW_INGREDIENT
} from '../actions'

const initialState = {
    ingredients: [],
    constructorIngredients: [],
    ingredientDetail: {},
    order: [],
    isOrderDetailsOpen: false,
    isIngredientDetailsOpen: false,
    loader: true
};


export const ingredientsReducer = (state = initialState, action) => {
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
                isOrderDetailsOpen: true
            }
        }
        case GET_ORDER_INGREDIENTS_SUCCESS: {
            return {...state, order: action.order};
        }
        case GET_ORDER_INGREDIENTS_FAILED: {
            return {...state, loader: true};
        }
        case ADD_INGREDIENT_TO_CONSTRUCTOR: {
            return {...state, constructorIngredients: [...state.constructorIngredients, action.ingredient]};
        }
    }
}

export const ingredientItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_INGREDIENT: {
            return {
                ...state,
                ingredientDetail: action.ingredientDetail,
                isIngredientDetailsOpen: true
            };
        }
        default: {
            return state;
        }
    }
}


export const rootReducer = combineReducers({ingredientsReducer})