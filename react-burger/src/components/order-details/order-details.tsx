import React from "react";
import CekMark from '../../images/check-mark.png'
import styles from './order-ditails.module.css'
import Modal from "../modal/modal";
import {useSelector} from "../../utils/types";
import {TModal} from "../../utils/types";


function OrderDetails(props: TModal) {

    const {order, isOrderDetailsOpen} = useSelector(({ingredientsReducer}) => ingredientsReducer)
    return (
        <Modal
            closeModal={props.closeModal}
            isOpen={isOrderDetailsOpen}
        >
            <p className="text text_type_digits-large">{order}</p>
            <h2 className={styles.title}>идентификатор заказа</h2>
            <img src={CekMark} className={styles.image} alt={"name"}/>
            <h3 className={styles.orderStatus}>Ваш заказ начали готовить</h3>
            <h3 className={styles.addInfo}>Дождитесь готовности на орбитальной станции</h3>
        </Modal>
    )
}


export default OrderDetails;