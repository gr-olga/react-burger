import styles from "./auth.module.css";
import {Link} from 'react-router-dom';


export function AuthExtra(props: TAuthExtraProps) {
    return (
        <div className={styles.extra}>
            <h3 className={styles.option}>{props.text}</h3>
            <Link className={styles.link} to={props.route}>{props.linkText}</Link>
        </div>
    )
}


interface TAuthExtraProps {
    text: string;
    link: string;
    linkText: string;
    route: string
}