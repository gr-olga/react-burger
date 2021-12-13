import React from "react";
import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from './ingredient-details.module.css'

function IngredientDetails(props) {

    return (
        <ModalOverlay>
            <h1 className={styles.title}>Детали ингредиента</h1>
            <div>
                <img  className={styles.image} src={props.image} alt={props.name}/>
                <h2 className={styles.descriptor}>{props.name}</h2>
                <div className={styles.list}>
                    <h4>Калории,ккал</h4>
                    <h4>Белки, г</h4>
                    <h4>Жиры, г</h4>
                    <h4>Углеводы, г</h4>
                    <p>{props.calories}</p>
                    <p>{props.proteins}</p>
                    <p>{props.fat}</p>
                    <p>{props.carbohydrates}</p>
                </div>
            </div>
        </ModalOverlay>
    )
}

export default IngredientDetails;