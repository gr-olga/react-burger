import styles from "./forgot-password.module.css";
import {Button, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {ChangeEvent, useState} from "react";
import {AuthForm} from "../auth/auth-form";
import {useHistory} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {reorderPassword} from "../../services/actions/auth";


function ForgotPassword() {
    const [email, setEmail] = useState('bob@example.com')
    const history = useHistory();
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const dispatch = useDispatch()

    function resetPassword() {
        (dispatch(reorderPassword(email)) as any)
            .then(() => history.push({pathname: '/password-recovery', state: {fromRecovery: true}}))
    }

    return (
        <AuthForm
            title={'Восстановление пароля'}
            text={'Вспомнили пароль?'}
            link={''}
            linkText={'Войти'}
            route={'/login'}
            onSubmit={resetPassword}
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