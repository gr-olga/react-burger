import React, {MouseEvent} from "react";
import styles from './modal-overlay.module.css'
import {TModal} from "../../utils/types";

function ModalOverlay(props: TModal) {
    const closeModal = props.closeModal

    function closeModalClick(evt: MouseEvent) {
        if ((evt.target as HTMLDivElement).classList.contains(styles.overlay)) closeModal()
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