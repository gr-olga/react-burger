import styles from "./forgot-password.module.css";
import {Button, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {ChangeEvent, useState} from "react";
import {AuthForm} from "../auth/auth-form";


function ForgotPassword() {
    const [email, setEmail] = useState('bob@example.com')
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    return (
        <AuthForm
            title={'Восстановление пароля'}
            text={'Вспомнили пароль?'}
            link={''}
            linkText={'Войти'}
        >
            <div className={styles.box}>
            <EmailInput onChange={onChangeEmail} value={email} name={'Укажите e-mail'}/>
            </div>
            <div className={styles.button}>
                <Button type="primary" size="large">{'Восстановить'}</Button>
            </div>
        </AuthForm>
    )
}

export default ForgotPassword