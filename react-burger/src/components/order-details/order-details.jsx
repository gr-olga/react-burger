import React from "react";
import CekMark from '../../images/check-mark.png'
import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from './order-ditails.module.css'
function OrderDetails(){
    return(
        <ModalOverlay>
            <div className={styles.container}>
            <p className="text text_type_digits-large">123456</p>
            <h2 className={styles.title}>идентификатор заказа</h2>
            <img src={CekMark} className={styles.image}/>
            <h3 className={styles.orderStatus}>Ваш заказ начали готовить</h3>
            <h3 className={styles.addInfo}>Дождитесь готовности на орбитальной станции</h3>
        </div>
        </ModalOverlay>
    )
}
export default OrderDetails;