import styles from "./auth.module.css" ;
import {AuthExtra} from "./auth-extra";

export function AuthForm(props: TAuthFormProps) {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h2 className={styles.title}> {props.title} </h2>
                <form className={styles.form}>
                    {props.children}
                </form>
                <AuthExtra text={props.text}
                           link={props.link}
                           linkText={props.linkText}
                />
                {/*<AuthExtra text={props.text}*/}
                {/*           link={props.link}*/}
                {/*           linkText={props.linkText}/>*/}
            </div>
        </div>
    )
}

interface TAuthFormProps {
    children: any;
    title: string;
    text: string;
    link: string;
    linkText: string;
}