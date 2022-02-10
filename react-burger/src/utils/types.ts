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

//import {TState} from "../services/reducers/index";


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
}

export type TIngredient = {
    _id: string,
    name: string,
    onItemClick: (item: TIngredient) => void
    image: string,
    price: number
    img: string;
    type: string
};

export type StoredIngredient = Omit<TIngredient, 'onItemClick'>


export interface BurgerIngredientsTypes {
    onIngredientClick: (item: TIngredient) => void
}

export interface TConstructorItem {
    type: string
    text: string
    thumbnail: string
    _id: string
    isLocked: boolean
    index: number
    name: string
    price: number
    image: string
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

