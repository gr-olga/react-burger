import PropTypes from "prop-types";

export const BurgerIngredientsTypes = {
    name: PropTypes.string,
    _id: PropTypes.number,
    type: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string
}

export const IngredientDetailsTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number,
}

export const OrderDetailsTypes = {
    name: PropTypes.string,
    _id: PropTypes.number,
    type: PropTypes.string,
    price: PropTypes.number,
}

export const ConstructorItemTypes = {
    name: PropTypes.string.isRequired,
    _id: PropTypes.number.isRequired,
    index:PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isLocked: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
}