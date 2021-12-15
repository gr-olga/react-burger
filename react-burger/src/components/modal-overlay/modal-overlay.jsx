import React from "react";
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

    return (
        <div className={styles.overlay}
             style={props.isOpen ? {
                 visibility: "visible", transition: "visibility .35s, opacity 0.35s ease-in-out",
                 opacity: "1"
             } : {visibility: "hidden"}
             }
             tabIndex="0"
             onKeyUp={closeModalKey}
             onClick={closeModalClick}>
            <div className={styles.box}>
                <div className={styles.btn}>
                    <h1 className={styles.title}>{props.title}</h1>
                    <CloseIcon type="primary" onClick={props.onClose}/>
                </div>
                {props.children}
            </div>
        </div>
    )
}

export default ModalOverlay