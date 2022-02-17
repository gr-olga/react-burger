import {Action, ActionCreator} from 'redux'
import {TAction} from "../services/actions";
import {ThunkAction} from "redux-thunk";
import {Dispatch} from "react";
import {TypedUseSelectorHook, useDispatch as dispatchHook, useSelector as selectorHook} from "react-redux";
import {state} from "../index";

export type TState = {
    ingredientIds: Array<number>
    ingredients: Array<TClearIngredient>,
    constructorIngredients: Array<TIngredientForConstructor>,
    nonBunIngredientsList: Array<TIngredientForConstructor>,
    dragContainer: any | Array<TConstructorItem>,
    ingredientDetail: Record<string, any> | TIngredientDetail,
    order: null | TOrder,
    isOrderDetailsOpen: boolean,
    isIngredientDetailsOpen: boolean,
    loader: boolean,
    counter: Record<string, number>,
    itemsRequest: boolean
}

export type TUserData = {
    user: TUser,
    accessToken: string
    refreshToken: string
}

export interface TUser {
    email: string,
    name: string
}

export interface TUserWithPassword extends TUser {
    password: string
}

export type TIngredientDetail = {
    calories: number
    proteins: number
    fat: number
    carbohydrates: number
    image: string
    name: string
}

export type TOrder = {
    success: boolean;
    name: string;
    order: {
        order: number
    };
};

export type TModal = {
    closeModal: () => void
    children?: any,
    title?: string,
    isOpen?: boolean
}

export interface TIngredient extends TClearIngredient {
    onItemClick: (item: TIngredient) => void
}

export type TClearIngredient = {
    _id: string,
    name: string,
    image: string,
    price: number
    img: string;
    type: string
}

export type StoredIngredient = Omit<TIngredient, 'onItemClick'>


export interface BurgerIngredientsTypes {
    onIngredientClick: (item: TIngredient) => void
}

export interface TConstructorItem extends TClearIngredient {
    // text: string
    // thumbnail: string
    // isLocked: boolean
    index: number
    handleClose: (_id: string | number, index: string | number,) => void
}

export interface TListItems {
    type: string
}

export interface BurgerConstructorTypes {
    onDropHandler: (item: any) => void
}

export interface TIngredientForConstructor extends TConstructorItem {
    unikey: string
    type: string
}

export interface ConstructorItemProps {
    index: number;
    _id: string;
    name: string;
    price: number;
    image: string;

}

export type RootState = ReturnType<typeof state.getState>


export type AppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, Action, RootState, TAction>>;
// export type AppDispatch = typeof initialState.dispatch
export type AppDispatch = Dispatch<TAction>

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook
export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>();