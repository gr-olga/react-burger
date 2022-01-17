import React from "react";
import Modal from "../modal/modal";
import styles from './ingredient-details.module.css'
import {BurgerIngredientsTypes} from "../../utils/types";
import {useSelector} from "react-redux";


function IngredientDetails(props) {
    const {isIngredientDetailsOpen, ingredientDetail} = useSelector(({ingredientsReducer}) => ingredientsReducer)
    return (
        <Modal
            title={'Детали ингредиента'}
            onClose={props.onClose}
            isOpen={isIngredientDetailsOpen}
        >
            <div className={styles.box}>
                <div className={styles.container}>
                    <img className={styles.image} src={ingredientDetail?.image} alt={'name'}/>
                    <h2 className={styles.descriptor}>{ingredientDetail?.name}</h2>
                    <div className={styles.list}>
                        <h4 className={styles.heading}>Калории,ккал</h4>
                        <h4 className={styles.heading}>Белки, г</h4>
                        <h4 className={styles.heading}>Жиры, г</h4>
                        <h4 className={styles.heading}>Углеводы, г</h4>
                        <p className={styles.numbers}>{ingredientDetail?.calories}</p>
                        <p className={styles.numbers}>{ingredientDetail?.proteins}</p>
                        <p className={styles.numbers}>{ingredientDetail?.fat}</p>
                        <p className={styles.numbers}>{ingredientDetail?.carbohydrates}</p>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

IngredientDetails.propTypes = BurgerIngredientsTypes

export default IngredientDetails;