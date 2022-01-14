import {combineReducers} from 'redux';
import {GET_INGREDIENTS_FAILED, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS} from '../actions'

const initialState = {
    ingredients: [],
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
            return {...state, loader: false, ingredients: action.ingredients };
        }
        case GET_INGREDIENTS_FAILED: {
            return {...state, loader: true};
        }
        default: {
            return state
        }
        //
        // case GET_ORDER_INGREDIENTS_REQUEST: {
        //     return {
        //         ...state,
        //         isOrderDetailsOpen: true
        //     }
        // }
        // case GET_ORDER_INGREDIENTS_SUCCESS: {
        //     return {...state, order: action.items};
        // }
        // case GET_ORDER_INGREDIENTS_FAILED: {
        //     return {...state, loader: true};
        // }
    }
}


export const rootReducer = combineReducers({ingredientsReducer})