import React from "react";
import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from './ingredient-details.module.css'
import bun from '../../images/bun02.png'

function IngredientDetails(props) {
    return (
        <ModalOverlay
            title={'Детали ингредиента'}
            onClose={props.onClose}
            isOpen={props.isOpen}
        >
            <div className={styles.box}>
                <div className={styles.container}>
                    <img className={styles.image} src={props.item?.image} alt={props.name}/>
                    <h2 className={styles.descriptor}>{props.item?.name}</h2>
                    <div className={styles.list}>
                        <h4 className={styles.heading}>Калории,ккал</h4>
                        <h4 className={styles.heading}>Белки, г</h4>
                        <h4 className={styles.heading}>Жиры, г</h4>
                        <h4 className={styles.heading}>Углеводы, г</h4>
                        <p className={styles.numbers}>{props.item?.calories}</p>
                        <p className={styles.numbers}>{props.item?.proteins}</p>
                        <p className={styles.numbers}>{props.item?.fat}</p>
                        <p className={styles.numbers}>{props.item?.carbohydrates}</p>
                        {/*<p className={styles.numbers}>444.4</p>*/}
                        {/*<p className={styles.numbers}>55.5</p>*/}
                        {/*<p className={styles.numbers}>22</p>*/}
                        {/*<p className={styles.numbers}>11</p>*/}
                    </div>
                </div>
            </div>
        </ModalOverlay>
    )
}

export default IngredientDetails;