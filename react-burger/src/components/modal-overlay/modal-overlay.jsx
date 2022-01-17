import React, {useEffect} from "react";
import styles from './modal-overlay.module.css'
import {useDispatch} from "react-redux";
import {CLOSE_MODAL, SHOW_INGREDIENT} from "../../services/actions";


function ModalOverlay(props) {
    const dispatch = useDispatch();
   function closeModal(){
        dispatch({type: CLOSE_MODAL})
    }

    useEffect(() => {
        const closeByEscape = (e) => {
            if (e.key === "Escape") {
                closeModal()
            }
        }
        document.addEventListener('keydown', closeByEscape)

        return () => document.removeEventListener('keydown', closeByEscape)
    }, [])


    function closeModalClick(evt) {
        if (evt.target.classList.contains(styles.overlay)) closeModal()
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