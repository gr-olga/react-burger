import styles from "../enterence/enterence.module.css";
import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {ChangeEvent, useState} from "react";

function Registration() {
    const [email, setEmail] = useState('bob@example.com')
    const [password, setPassword] = useState('password')
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    return (
        <div>
        <h2 className={styles.title}> Вход </h2>

    <div className={styles.box}>
        <EmailInput onChange={onChangeEmail} value={email} name={'email'}/>
    </div>
    <div className={styles.box}>
        <PasswordInput onChange={onChangePassword} value={password} name={'password'}/>
    </div>
    <div className={styles.button}>
        <Button type="primary" size="large">Войти</Button>
    </div>
        </div>
)
}