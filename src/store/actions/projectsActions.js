import { 
    createProjectUrl , 
    fetchProjectsUrl , 
    fetchCompletedProjectsUrl , 
    completeProjectUrl , 
    deleteProjectUrl } from 'apis'
import { 
    ADD_PROJECT , 
    COMPLETE_PROJECT , 
    DELETE_PROJECT , 
    LOAD_PROJECTS , 
    LOAD_COMPLETED_PROJECTS } from '../types'

export const addProject = (name,description) => {
    return async (dispatch,getState) => {
        const token = getState().auth.token
        const response = await fetch(createProjectUrl,{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : token
            },
            body : JSON.stringify({
                title : name,
                description,
                tags : []
            })
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


export const loadProjects = (pageNo) => {
    return async (dispatch,getState) => {
        const token = getState().auth.token
        const response = await fetch(fetchProjectsUrl(pageNo),{
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : token
            }
        })
        if(!response.ok){
            const errorResData = await response.json()
            console.log(errorResData)
            let message = errorResData.message
            throw new Error(message);
        }
        const resData = await response.json();
        // console.log(resData)
        dispatch({ type : LOAD_PROJECTS , projects : resData.data.projects })
    }
} 


export const loadCompletedProjects = () => {
    return async (dispatch,getState) => {
        const token = getState().auth.token
        const response = await fetch(fetchCompletedProjectsUrl,{
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : token
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


export const completeProject = (id) => {
    return async (dispatch,getState) => {
        console.log(completeProjectUrl(id))
        const token = getState().auth.token
        const response = await fetch(completeProjectUrl(id),{
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : token
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


export const deleteProject = (id) => {
    return async (dispatch,getState) => {
        const token = getState().auth.token
        const response = await fetch(deleteProjectUrl(id),{
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : token
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