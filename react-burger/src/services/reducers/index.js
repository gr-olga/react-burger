import {combineReducers} from 'redux';
import {
    ADD_INGREDIENT_TO_CONSTRUCTOR, CLOSE_MODAL,
    DECREASE_COUNTER,
    GET_INGREDIENTS_FAILED,
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_ORDER_INGREDIENTS_FAILED,
    GET_ORDER_INGREDIENTS_REQUEST,
    GET_ORDER_INGREDIENTS_SUCCESS,
    INCREASE_COUNTER,
    REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
    SHOW_INGREDIENT
} from '../actions'

const initialState = {
    ingredients: [],
    constructorIngredients: [],
    ingredientDetail: {},
    order: null,
    isOrderDetailsOpen: false,
    isIngredientDetailsOpen: false,
    loader: true,
    counter: {}
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
                order: action.order,
            }
        }
        case GET_ORDER_INGREDIENTS_SUCCESS: {
            console.log(action.order);
            return {...state,
                order: action.order,
                isOrderDetailsOpen: true};
        }
        case GET_ORDER_INGREDIENTS_FAILED: {
            return {...state, loader: true};
        }
        case ADD_INGREDIENT_TO_CONSTRUCTOR: {
            return {...state, constructorIngredients: [...state.constructorIngredients, action.ingredient]};
        }
        case REMOVE_INGREDIENT_FROM_CONSTRUCTOR: {
            return {
                ...state,
                constructorIngredients: state.constructorIngredients.filter((item) => item._id !== action.ingredient._id)
            };
        }
        case SHOW_INGREDIENT: {
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

        // case MOVE_INSIDE_CONSTRUCTOR: {
        //     return {...state, constructorIngredients: [...state.constructorIngredients, action.ingredient]};
        // }

        case INCREASE_COUNTER: {
            const prevValue = state.counter[action.itemId] ? state.counter[action.itemId] : 0;
            return {...state, counter: {...state.counter, [action.itemId]: prevValue + 1}};
        }
        case DECREASE_COUNTER: {
            const prevValue = state.counter[action.itemId] ? state.counter[action.itemId] : 1;
            return {...state, counter: {...state.counter, [action.itemId]: prevValue - 1}};
        }
    }


// export const ingredientItemReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case SHOW_INGREDIENT: {
//             return {
//                 ...state,
//                 ingredientDetail: action.ingredientDetail,
//                 isIngredientDetailsOpen: true
//             };
//         }
//         default: {
//             return state;
//         }
//     }
}


export const rootReducer = combineReducers({ingredientsReducer})