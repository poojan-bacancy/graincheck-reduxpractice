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
    LOAD_COMPLETED_PROJECTS, 
    LOAD_MORE_PROJECTS} from '../types'

export const addProject = (name,description,tags) => {
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
                tags
            })
        })
        if(!response.ok){
            const errorResData = await response.json()
            console.log(errorResData)
            let message = errorResData.message
            throw new Error(message);
        }
        const resData = await response.json();

        const project = resData.data.project
        dispatch({ type : ADD_PROJECT , project : project })
    }
}


export const loadProjects = (pageNo,searchTerm="") => {
    return async (dispatch,getState) => {
        
        const token = getState().auth.token

        const response = await fetch(fetchProjectsUrl(pageNo,searchTerm),{
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
        
        const ACTION = pageNo === 1 
            ? LOAD_PROJECTS
            : LOAD_MORE_PROJECTS  

        dispatch({ type : ACTION , projects : resData.data.projects })
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
        
        dispatch({ type : LOAD_COMPLETED_PROJECTS , projects : resData.data.projects })
    }
}


export const completeProject = (id) => {
    return async (dispatch,getState) => {
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
            throw new Error(message)
        }
        const resData = await response.json()

        dispatch({ type : COMPLETE_PROJECT , id : id})
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
        const resData = await response.json()
        
        dispatch({ type : DELETE_PROJECT , id : id})
    }
}