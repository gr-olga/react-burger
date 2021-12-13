import React from "react";
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './modal-overlay.module.css'

function ModalOverlay() {
    return (
        <div className={styles.overlay}>
            <div className={styles.box}>
                <div  className={styles.btn}>
                <CloseIcon type="primary" />
                </div>
            </div>
        </div>
    )
}

export default ModalOverlay