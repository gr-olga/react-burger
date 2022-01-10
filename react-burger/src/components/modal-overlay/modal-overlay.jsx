import React, {useEffect} from "react";
import styles from './modal-overlay.module.css'


function ModalOverlay(props) {

    useEffect(() => {
        const closeByEscape = (e) => {
            if (e.key === "Escape") {
                props.onClose()
            }
        }
        document.addEventListener('keydown', closeByEscape)

        return () => document.removeEventListener('keydown', closeByEscape)
    }, [])


    function closeModalClick(evt) {
        if (evt.target.classList.contains(styles.overlay)) props.onClose()
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