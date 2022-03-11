import {AppDispatch, AppThunk, TUserData, TUserWithPassword} from "../../utils/types";
import {getRegisterUserData, TRegistrationResponse} from "../../api/api";

export const SET_USER_DATA: "SET_USER_DATA" = 'SET_USER_DATA';

export interface setUserData {
    type: typeof SET_USER_DATA
    userData: TUserData
}

export const setUserData = (userData: TUserData): setUserData => ({
    type: SET_USER_DATA,
    userData
})

export const REMOVE_USER: "REMOVE_USER" = "REMOVE_USER";

export interface removeUser {
    type: typeof REMOVE_USER
    userData: TUserData
}

export type TAuthAction =
    | setUserData
    | getRegisterProfileRequest
    | getRegisterProfileSuccess
    | getRegisterProfileFailed

export const GET_REGISTER_PROFILE_REQUEST: "GET_REGISTER_PROFILE_REQUEST" = 'GET_REGISTER_PROFILE_REQUEST';
export const GET_REGISTER_PROFILE_SUCCESS: 'GET_REGISTER_PROFILE_SUCCESS' = 'GET_REGISTER_PROFILE_SUCCESS';
export const GET_REGISTER_PROFILE_FAILED: 'GET_REGISTER_PROFILE_FAILED' = 'GET_REGISTER_PROFILE_FAILED';


export interface getRegisterProfileRequest {
    type: typeof GET_REGISTER_PROFILE_REQUEST;
    userData: TUserWithPassword;
}

export interface getRegisterProfileSuccess {
    type: typeof GET_REGISTER_PROFILE_SUCCESS;
    userData: TUserData;
}

export interface getRegisterProfileFailed {
    type: typeof GET_REGISTER_PROFILE_FAILED;
}


const getRegisterProfileRequest = (userData: TUserWithPassword): getRegisterProfileRequest => ({
    type: GET_REGISTER_PROFILE_REQUEST,
    userData
})
const getRegisterProfileSuccess = (userData: TUserData): getRegisterProfileSuccess => ({
    type: GET_REGISTER_PROFILE_SUCCESS,
    userData
})
const getRegisterProfileFailed = (): getRegisterProfileFailed => ({
    type: GET_REGISTER_PROFILE_FAILED,
})


export const getRegisterProfile: AppThunk = (userData: TUserWithPassword) => (dispatch: AppDispatch) => {
    dispatch(getRegisterProfileRequest(userData));
    return getRegisterUserData(userData)
        .then((res: TRegistrationResponse) => {
            if (res && res.success) {
                dispatch(getRegisterProfileSuccess({
                    user: res.user,
                    refreshToken: res.refreshToken,
                    accessToken: res.accessToken
                }));
            } else {
                dispatch(getRegisterProfileFailed());
            }

            return res;
        })
        .catch((err) => console.log("failed", err))
    // };
}

