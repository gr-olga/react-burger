import styles from "./auth.module.css";
import { Link } from 'react-router-dom';



export function AuthExtra(props: TAuthExtraProps){
    return(
        <div className={styles.extra}>
            <h3 className={styles.option}>{props.text}</h3>
            <Link to={props.route}>
                <a className={styles.link} href={props.link}> {props.linkText}</a>
            </Link>
        </div>
    )
}


interface TAuthExtraProps {
    text: string;
    link: string;
    linkText: string;
    route:string
}