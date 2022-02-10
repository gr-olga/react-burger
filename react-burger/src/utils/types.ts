import PropTypes from "prop-types";
import {extend} from "lodash";
//
// export const BurgerIngredientsTypes = {
//     onIngredientClick: PropTypes.func.isRequired,
// }
//
// export const BurgerConstructorTypes = {
//     onDropHandler: PropTypes.func.isRequired
// }
//
export const IngredientDetailsTypes = {
    closeModal: PropTypes.func.isRequired
}
//
// export const OrderDetailsTypes = {
//     closeModal: PropTypes.func.isRequired
// }
//
// export const ConstructorItemTypes = {
//     _id: PropTypes.string.isRequired,
//     index: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     image: PropTypes.string.isRequired
// }
//
// export const IngredientTypes = {
//     _id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     onItemClick: PropTypes.func.isRequired,
//     img: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired
// }



export type TState = {
    ingredients: [TClearIngredient],
    constructorIngredients: [TIngredientForConstructor],
    nonBunIngredientsList: any,
    dragContainer: [TConstructorItem],
    ingredientDetail: TClearIngredient,
    order:TOrder,
    isOrderDetailsOpen: boolean,
    isIngredientDetailsOpen: boolean,
    loader: boolean,
    counter: number,
    itemsRequest: boolean
}

export type TOrder = {
    success: boolean;
    name: string;
    order: {
        order: number
    };
};

export type TModal  = {
    closeModal: () => void
    children: any,
    title: string,
     isOpen: boolean
}

export interface  TIngredient extends  TClearIngredient{
    onItemClick: (item: TIngredient) => void
};

export type TClearIngredient ={
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

export interface TConstructorItem extends TClearIngredient{
    text: string
    thumbnail: string
    isLocked: boolean
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
}

