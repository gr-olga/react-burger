import PropTypes from "prop-types";
import BurgerIngredients from "../components/burger-ingredients/burger-ingredients";
import IngredientDetails from "../components/ingredient-details/ingredient-details";
import OrderDetails from "../components/order-details/order-details";

BurgerIngredients.propTypes = {
    name: PropTypes.string,
    _id: PropTypes.number,
    type: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
}

IngredientDetails.propTypes = {
    name: PropTypes.string,
    _id: PropTypes.number,
    type: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    image: PropTypes.string,
}

OrderDetails.propTypes = {
    name: PropTypes.string,
    _id: PropTypes.number,
    type: PropTypes.string,
}