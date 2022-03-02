import styles from "./not-found-page.module.css";
import bun from '../../images/bun02.png'

export function NotFoundPage() {
    return (
        <div className={styles.box}>
            <h2 className={styles.text}> 404 Not Found </h2>
            <img src={bun} alt="булка"/>
        </div>
    )
}