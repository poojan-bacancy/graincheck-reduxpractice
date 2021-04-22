import { LOGIN, LOGOUT } from "../types";

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
        
        
        dispatch({ type : LOGIN , username : email , token : token })
    }
} 