import {TUserData} from "../../utils/types";

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

// export const GET_PROFILE_REQUEST: "GET_PROFILE_REQUEST" = 'GET_PROFILE_REQUEST';
// export const GET_PROFILE_SUCCESS: 'GET_PROFILE_SUCCESS' = 'GET_PROFILE_SUCCESS';
// export const GET_PROFILE_FAILED: 'GET_PROFILE_FAILED' = 'GET_PROFILE_FAILED';


// export interface getProfileRequest {
//     type: typeof GET_PROFILE_REQUEST;
//     userData: TUserData
// }
//
// export interface getProfileSuccess {
//     type: typeof GET_PROFILE_SUCCESS;
//     user: TUserData
// }
//
// export interface getIProfileFailed {
//     type: typeof GET_PROFILE_FAILED;
// }


export type TAuthAction = setUserData


// const getProfileRequest = (userData: TUserData): getProfileRequest => ({
//     type: GET_PROFILE_REQUEST,
//     userData
// })
// const getProfileSuccess = (user: TUserData): getProfileSuccess => ({
//     type: GET_PROFILE_SUCCESS,
//     user
// })
// const getIProfileFailed = (): getIProfileFailed => ({
//     type: GET_PROFILE_FAILED,
// })

//
// export const getProfile:AppThunk = (token: any) =>(dispatch: AppDispatch) =>{
//     // return function (dispatch: any) {
//     dispatch(getProfileRequest(userData));
//     getRegisterUserData(userData).then(res => {
//         if (res && res.success) {
//             dispatch(getProfileSuccess(res.accessToken)
//             );
//         } else {
//             dispatch(getIProfileFailed());
//         }
//     })
//         .catch((err) => console.log("failed", err))
//     //   };
// }