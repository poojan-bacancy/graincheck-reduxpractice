import  AsyncStorage  from "@react-native-community/async-storage";
import { AUTHENTICATE, LOGOUT , SET_DID_TRY_AL } from "../types";

export const authenticate = (token,userId) => {
    return dispatch => {
        dispatch({ type : AUTHENTICATE , token : token , userId : userId });
    }
}

export const login = (email,password,callback) => {
    return async dispatch => {
        const response = await fetch('http://18.223.66.20:3000/user/login',
        {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                email : email,
                password : password
            })
        })
        callback();
        
        if(!response.ok){
            const errorResData = await response.json()
            let message = errorResData.message
            throw new Error(message);
        }
        const resData = await response.json();
        
        const token = resData.data.token
        const userId = resData.data.user._id
    
        dispatch(authenticate(token,userId))
        saveDataToStorage(token,userId)
    }
} 

export const logout = () => {
    AsyncStorage.removeItem('userData');
    return { type : LOGOUT }
} 

const saveDataToStorage = (token,userId) => {
    AsyncStorage.setItem('userData',JSON.stringify({
        token : token ,
        userId : userId
    }))
}

export const setDidTryAl = () => {
    return { type : SET_DID_TRY_AL }
}