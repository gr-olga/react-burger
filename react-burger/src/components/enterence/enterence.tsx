import {ChangeEvent, useState} from "react";
import styles from "./enterence.module.css";
import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {AuthForm} from "../auth/auth-form";
import {AuthExtra} from "../auth/auth-extra";
import {getLoginUserData, TRegistrationResponse} from "../../api/api";
import {setUserData} from "../../services/actions/auth";
import {useDispatch} from "../../utils/types";


function Entrance() {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('bob@example.com')
    const [password, setPassword] = useState('password')
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    function logIn(): Promise<void> {
        console.log(12345678);
        return getLoginUserData({email, password})
            .then((res: TRegistrationResponse) => {
                dispatch(setUserData({
                    user: res.user,
                    refreshToken: res.refreshToken,
                    accessToken: res.accessToken
                }))
            })
    }

    return (
        <>
            <AuthForm
                onSubmit={logIn}
                title={'Вход'}
                text={'Вы — новый пользователь?'}
                link={''}
                linkText={'Зарегистрироваться'}
                route={'/register'}
            >
                <div className={styles.box}>
                    <EmailInput onChange={onChangeEmail} value={email} name={'email'}/>
                </div>
                <div className={styles.box}>
                    <PasswordInput onChange={onChangePassword} value={password} name={'password'}/>
                </div>
                <div className={styles.button}>
                    <Button type="primary" size="large">{'Войти'}</Button>
                </div>
            </AuthForm>
            <AuthExtra text={'Забыли пароль?'} link={''} linkText={'Восстановить пароль'} route={'/forgot-password'}/>
        </>
    )
}

export default Entrance