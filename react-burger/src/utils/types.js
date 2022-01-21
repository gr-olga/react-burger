import PropTypes from "prop-types";

export const BurgerIngredientsTypes = {
    onIngredientClick: PropTypes.func.isRequired,
}

export const BurgerConstructorTypes = {
    onDropHandler: PropTypes.func.isRequired
}

export const IngredientDetailsTypes = {
    closeModal: PropTypes.func.isRequired
}

export const OrderDetailsTypes = {
    closeModal: PropTypes.func.isRequired
}

export const ConstructorItemTypes = {
    _id: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
}

export const IngredientTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onItemClick: PropTypes.func.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}