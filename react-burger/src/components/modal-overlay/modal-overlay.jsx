import React, {useEffect, useRef} from "react";
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './modal-overlay.module.css'


function ModalOverlay(props) {
    const ESCAPE_BTN = 27;

    function closeModalKey(evt) {
        if (evt.keyCode === ESCAPE_BTN) props.onClose();
    }

    function closeModalClick(evt) {
        if (evt.target.classList.contains(styles.overlay)) props.onClose()
    }

    const overlayRef = useRef(null);

    useEffect(() => {
        overlayRef.current.focus();
    })

    return (
        <div className={props.isOpen ? `${styles.modal_open} ${styles.overlay}` : styles.overlay }
             tabIndex="0"
             onKeyDown={closeModalKey}
             onClick={closeModalClick}
             ref={overlayRef}
        >
            {props.children}
        </div>
    )
}

export default ModalOverlay