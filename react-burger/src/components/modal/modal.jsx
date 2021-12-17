import React, {useEffect} from "react";
import ReactDOM from 'react-dom';
import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from "../modal-overlay/modal-overlay.module.css";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

function Modal(props) {

    const modalRoot = document.getElementById('modal-root')
    const modalContainer = document.createElement('div')

    useEffect(() => {
        modalRoot.appendChild(modalContainer);
        return () => {
            modalRoot.removeChild(modalContainer)
        }
    })

    return ReactDOM.createPortal(
        (
            <ModalOverlay {...props}>
                <div className={styles.box}>
                    <div className={styles.btn}>
                        <h1 className={styles.title}>{props.title}</h1>
                        <CloseIcon type="primary" onClick={props.onClose}/>
                    </div>
                    {props.children}
                </div>
            </ModalOverlay>
        ), modalRoot)
}

export default Modal