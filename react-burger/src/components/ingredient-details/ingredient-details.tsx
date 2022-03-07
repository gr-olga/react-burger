import React from "react";
import styles from './ingredient-details.module.css'
import {useSelector} from "../../utils/types";
import {useParams} from "react-router-dom";


function IngredientDetails() {
    const {ingredientDetail, ingredients} = useSelector(({ingredientsReducer}) => ingredientsReducer);
    let { id } = useParams() as any;
    const detail = Object.keys(ingredientDetail).length === 0 ? ingredients.find((ing) => ing._id === id) : ingredientDetail;
    console.log(detail);
    return (
        <div className={styles.box}>
            <div className={styles.container}>
                <img className={styles.image} src={detail?.image} alt={'name'}/>
                <h2 className={styles.descriptor}>{detail?.name}</h2>
                <div className={styles.list}>
                    <h4 className={styles.heading}>Калории,ккал</h4>
                    <h4 className={styles.heading}>Белки, г</h4>
                    <h4 className={styles.heading}>Жиры, г</h4>
                    <h4 className={styles.heading}>Углеводы, г</h4>
                    <p className={styles.numbers}>{detail?.calories}</p>
                    <p className={styles.numbers}>{detail?.proteins}</p>
                    <p className={styles.numbers}>{detail?.fat}</p>
                    <p className={styles.numbers}>{detail?.carbohydrates}</p>
                </div>
            </div>
        </div>
    )
}

export default IngredientDetails;