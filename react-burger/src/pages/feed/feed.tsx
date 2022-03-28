import styles from './feed.module.css'
import {FeedBox} from "../../components/feed-box/feed-box";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {WS_FEED_CONNECTION_CLOSE, WS_FEED_CONNECTION_START} from "../../services/web-socket/wsActionTypes";

export function Feed() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
                type: WS_FEED_CONNECTION_START,
                payload: 'wss://norma.nomoreparties.space/api/orders/all'
            }
        )
        return () => {
            dispatch({type: WS_FEED_CONNECTION_CLOSE})
        }
    }, [dispatch])

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Лента заказов</h3>
            <div className={styles.leftContainer}>
                <FeedBox/>
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.orders}>
                    <div className={styles.ready}>
                        <h3 className={styles.condition}>Готовы:</h3>
                        <p className={styles.numbers}>034533 034533 543222 433456 345765</p>
                    </div>
                    <div className={styles.ready}>
                        <h3 className={styles.condition}>В работе:</h3>
                        <p className={styles.numbers}>034533 543222 433456</p>
                    </div>
                </div>
                <h3 className={styles.condition}>Выполнено за все время:</h3>
                <p className={styles.numbersBig}>28 752</p>
                <h3 className={styles.condition}>Выполнено за сегодня:</h3>
                <p className={styles.numbersBig}>138</p>
            </div>
        </div>
    )
}