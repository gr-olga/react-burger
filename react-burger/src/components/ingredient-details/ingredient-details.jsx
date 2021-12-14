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
                    <img className={styles.image} src={bun} alt={props.name}/>
                    <h2 className={styles.descriptor}>Биокотлета из марсианской Магнолии</h2>
                    <div className={styles.list}>
                        <h4 className={styles.heading}>Калории,ккал</h4>
                        <h4 className={styles.heading}>Белки, г</h4>
                        <h4 className={styles.heading}>Жиры, г</h4>
                        <h4 className={styles.heading}>Углеводы, г</h4>
                        {/*<p>{props.calories}</p>*/}
                        {/*<p>{props.proteins}</p>*/}
                        {/*<p>{props.fat}</p>*/}
                        {/*<p>{props.carbohydrates}</p>*/}
                        <p className={styles.numbers}>444.4</p>
                        <p className={styles.numbers}>55.5</p>
                        <p className={styles.numbers}>22</p>
                        <p className={styles.numbers}>11</p>
                    </div>
                </div>
            </div>
        </ModalOverlay>
    )
}

export default IngredientDetails;