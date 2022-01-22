import React from "react";
import styles from './modal-overlay.module.css'

function ModalOverlay(props) {
    const onClose= props.onClose
    function closeModalClick(evt) {
        if (evt.target.classList.contains(styles.overlay)) onClose()
    }

    return (
        <div className={props.isOpen ? `${styles.modal_open} ${styles.overlay}` : styles.overlay}
             onClick={closeModalClick}
        >
            {props.children}
        </div>
    )
}

export default ModalOverlay