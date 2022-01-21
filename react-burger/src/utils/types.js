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
    onClose:PropTypes.func
}

export const OrderDetailsTypes = {
    onClose:PropTypes.func
}

export const ConstructorItemTypes = {
    handleClose: PropTypes.func,
    isLocked: PropTypes.bool
}