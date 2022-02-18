import styles from "./registration.module.css";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {ChangeEvent, useState} from "react";
import {AuthForm} from "../auth/auth-form";
import {getRegisterUserData, TRegistrationResponse} from "../../api/api";
import {useDispatch} from "../../utils/types";
import {setUserData} from "../../services/actions/auth";
import {useHistory} from "react-router-dom";


function Registration() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const onChangeName = (e: ChangeEvent<HTMLInputElement>): void => {
        setName(e.target.value)
    }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value)
    }
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>): void => {
        setPassword(e.target.value)
    }

    const history = useHistory();

    function signUp(): Promise<void> {
        return getRegisterUserData({email, password, name})
            .then((res: TRegistrationResponse) => {
                dispatch(setUserData({
                    user: res.user,
                    refreshToken: res.refreshToken,
                    accessToken: res.accessToken
                }))
            })
            .then(() => history.replace({pathname: '/'}))
    }

    return (
        <AuthForm
            onSubmit={signUp}
            title={'Регистрация'}
            text={'Уже зарегистрированы?'}
            link={''}
            linkText={'Войти'}
            route={'/login'}
        >
            <div className={styles.box}>
                <Input
                    type={'text'}
                    onChange={onChangeName}
                    placeholder={'Имя'}
                    value={name}
                    name={'name'}
                    error={false}
                    errorText={'Ошибка'}
                    size={'default'}
                />
            </div>
            <div className={styles.box}>
                <EmailInput onChange={onChangeEmail} value={email} name={'email'}/>
            </div>
            <div className={styles.box}>
                <PasswordInput onChange={onChangePassword} value={password} name={'password'}/>
            </div>
            <div className={styles.button}>
                <Button type="primary" size="large">{'Зарегистрироваться'}</Button>
            </div>
        </AuthForm>
    )
}

export default Registration