import { ADD_PROJECT } from '../types'

export const addProject = (name,description) => {
    return async (dispatch,getState) => {
        const token = getState().auth.token
        console.log(token)
        const response = await fetch('http://54.172.146.171:3000/project/create',{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : token
            },
            body : {
                title : name,
                description : description,
                tags : []
            }
        })

        if(!response.ok){
            const errorResData = await response.json()
            console.log(errorResData)
            let message = errorResData.message
            throw new Error(message);
        }

        const resData = await response.json();

        console.log(resData)

    }
}