import {TUserData} from "../../utils/types";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

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
export type TAuthAction = setUserData

// export const GET_REGISTER_PROFILE_REQUEST: "GET_REGISTER_PROFILE_REQUEST" = 'GET_REGISTER_PROFILE_REQUEST';
// export const GET_REGISTER_PROFILE_SUCCESS: 'GET_REGISTER_PROFILE_SUCCESS' = 'GET_REGISTER_PROFILE_SUCCESS';
// export const GET_REGISTER_PROFILE_FAILED: 'GET_REGISTER_PROFILE_FAILED' = 'GET_REGISTER_PROFILE_FAILED';
//
//
// export interface getRegisterProfileRequest {
//     type: typeof GET_REGISTER_PROFILE_REQUEST;
//     userData: TUserData
// }
//
// export interface getRegisterProfileSuccess {
//     type: typeof GET_REGISTER_PROFILE_SUCCESS;
//     user: TUserData
// }
//
// export interface getRegisterIProfileFailed {
//     type: typeof GET_REGISTER_PROFILE_FAILED;
// }
//
//
// const getRegisterProfileRequest = (userData: TUserData): getProfileRequest => ({
//     type: GET_REGISTER_PROFILE_REQUEST,
//     userData
// })
// const getRegisterProfileSuccess = (user: TUserData): getProfileSuccess => ({
//     type: GET_REGISTER_PROFILE_SUCCESS,
//     user
// })
// const getRegisterIProfileFailed = (): getIProfileFailed => ({
//     type: GET_REGISTER_PROFILE_FAILED,
// })
//
//
// export const getRegisterProfile:AppThunk = (token: any) =>(dispatch: AppDispatch) =>{
//     // return function (dispatch: any) {
//     dispatch(getRegisterProfileRequest(userData));
//     getRegisterUserData(userData).then(res => {
//         if (res && res.success) {
//             dispatch(getRegisterProfileSuccess(res.accessToken)
//             );
//         } else {
//             dispatch(getIRegisterProfileFailed());
//         }
//     })
//         .catch((err) => console.log("failed", err))
//     //   };
// }



// export const fetchIngredients = createAsyncThunk(
//     "ingredients/fetchIngredients",
//     async () => {
//         const response = await newApi.getIdegrients();
//         return response.data
//     }
// );
//
// class IStateIgredients {
// }
//
// const initialStateIgredients: IStateIgredients = {
//     ingredients: [],
//     isIngredients: false,
// };
//
// const ingredientsSlice = createSlice({
//     name: "ingredients",
//     initialState: initialStateIgredients,
//     extraReducers: {
//
// // вот здесь на самом деле надо вместо строки писать [fetchIngredients].pending
// // но я не смог это типизировать, поэтому тупо строкой написал этот экстра редьюсер
//         "ingredients/fetchIngredients/pending": (state) => state,
//         "ingredients/fetchIngredients/fulfilled": (state, action: PayloadAction<IResponseIngredients> ) => {
//             state.ingredients = action.payload;
//             state.isIngredients = true;
//         },
//         "ingredients/fetchIngredients/rejected": (state) => {
//             state.isIngredients = false;
//         },
//     },
//     reducers: {},
// });
//
// export const ingredientsReducers = ingredientsSlice.reducer;
// export const ingredientsActions = ingredientsSlice.actions;