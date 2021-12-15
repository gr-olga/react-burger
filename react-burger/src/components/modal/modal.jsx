import React, {useEffect} from "react";
import ReactDOM from 'react-dom';
import ModalOverlay from "../modal-overlay/modal-overlay";

function Modal(props) {
    const modalRoot = document.getElementById('modal-root')

    // function closeModal(evt) {
    //     console.log(1111);
    //     (evt.target === "Escape" || evt.target.classList('overlay')) && props.onClose()
    // }

    const modalContainer = document.createElement('div')

    useEffect(() => {
        modalRoot.appendChild(modalContainer);
        return () => {
            modalRoot.removeChild(modalContainer)
        }
    })

    return ReactDOM.createPortal(
        (
            <ModalOverlay {...props}/>
        ), modalRoot)
}

export default Modal