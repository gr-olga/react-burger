import styles from './user-profile.module.css'
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import ProfileNavigation from "../profile-navigation/profile-navigation";
import {getUpdateUserData, initialUserData} from "../../services/actions/auth";
import {useDispatch} from "react-redux";
import {ChangeEvent, useEffect, useState} from "react";
import {getCookie} from "../../utils/cookies-helpers";
import {TRegistrationResponse} from "../../api/api";
import {TUser, useSelector} from "../../utils/types";

function UserProfile() {
    const dispatch = useDispatch();
    const {user} = useSelector(({userReducer}) => userReducer)


    const [targetName, setTargetName] = useState(user.name)
    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setTargetName(e.target.value)
    }
    const [targetEmail, setTargetEmail] = useState(user.email)
    const [targetPassword, setTargetPassword] = useState('')
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setTargetEmail(e.target.value)
    }
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setTargetPassword(e.target.value)
    }

    useEffect(() => {
        const token = getCookie('accessToken');
        if (!token) return;
        (dispatch(initialUserData(token)) as any)
            .then((res: TRegistrationResponse) => {
                setUserForm(res.user)
            })
    }, [dispatch])

    function updateData() {
        const token = getCookie('accessToken');
        if (token) {
            (dispatch(getUpdateUserData(token, {
                name: targetName,
                email: targetEmail,
                password: targetPassword
            })) as any)
                .then((res: TRegistrationResponse) => {
                    setUserForm(res.user)
                })
        }
    }

    function setUserForm(user: TUser): void {
        setTargetName(user.name)
        setTargetEmail(user.email)
        setTargetPassword('')
    }

    return (
        <div className={styles.mainContainer}>
            <ProfileNavigation type={'profile'}/>
            <div className={styles.formContainer}>
                <div className={styles.box}>
                    <Input
                        type={'text'}
                        onChange={onChangeName}
                        placeholder={'Имя'}
                        value={targetName}
                        name={'name'}
                        error={false}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                </div>
                <div className={styles.box}>
                    <EmailInput onChange={onChangeEmail} value={targetEmail} name={'email'}/>
                </div>
                <div className={styles.box}>
                    <PasswordInput onChange={onChangePassword} value={targetPassword} name={'password'}/>
                </div>
                <div className={styles.button}>
                    <Button type="secondary" size="medium">{'Отмена'}</Button>
                    <Button type="primary" size="large" onClick={updateData}>{'Сохранить'}</Button>
                </div>
            </div>

        </div>
    )
}

export default UserProfile