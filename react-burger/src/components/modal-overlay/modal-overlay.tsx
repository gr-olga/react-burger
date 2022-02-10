import React, {SyntheticEvent} from "react";
import styles from './modal-overlay.module.css'

function ModalOverlay(props:any) {
    const onClose= props.onClose
    function closeModalClick(evt: any) {
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