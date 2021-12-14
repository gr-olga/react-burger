import React from "react";
import CekMark from '../../images/check-mark.png'
import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from './order-ditails.module.css'
import PropTypes from "prop-types";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";

function OrderDetails(props) {
    return (
        <ModalOverlay
            onClose={props.onClose}
            isOpen={props.isOpen}
        >
            <p className="text text_type_digits-large">123456</p>
            <h2 className={styles.title}>идентификатор заказа</h2>
            <img src={CekMark} className={styles.image} alt={"name"}/>
            <h3 className={styles.orderStatus}>Ваш заказ начали готовить</h3>
            <h3 className={styles.addInfo}>Дождитесь готовности на орбитальной станции</h3>
        </ModalOverlay>
    )
}
OrderDetails.propTypes = {
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

export default OrderDetails;