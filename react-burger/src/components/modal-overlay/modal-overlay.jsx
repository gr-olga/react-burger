import React from "react";
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './modal-overlay.module.css'

function ModalOverlay() {
    return (
        <div>
            <div className={styles.box}>
                <CloseIcon type="primary" />
            </div>
        </div>
    )
}

export default ModalOverlay