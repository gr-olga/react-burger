import PropTypes from "prop-types";

export const BurgerIngredientsTypes = {
    name: PropTypes.string.isRequired,
    _id: PropTypes.number,
    type: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
}

export const IngredientDetailsTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export const OrderDetailsTypes = {
    name: PropTypes.string.isRequired,
    _id: PropTypes.number,
    type: PropTypes.string,
}