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

const headersFn = (token) => {
    return{
        'Content-Type' : 'application/json',
        'Authorization' : token
    }
}

const throwErrorFn = async (response) => {
    const errorResData = await response.json()
    throw new Error(errorResData.message);
}

export const addProject = (name,description,tags) => {
    return async (dispatch,getState) => {
        const token = getState().auth.token
        const response = await fetch(createProjectUrl,{
            method : 'POST',
            headers : headersFn(token),
            body : JSON.stringify({
                title : name,
                description,
                tags
            })
        })
        if(!response.ok){
            throwErrorFn(response)
        }
        const resData = await response.json();
        dispatch({ type : ADD_PROJECT , project : resData.data.project })
    }
}

export const loadProjects = (pageNo,searchTerm="") => {
    return async (dispatch,getState) => { 
        const token = getState().auth.token
        const response = await fetch(fetchProjectsUrl(pageNo,searchTerm),{
            method : 'GET',
            headers : headersFn(token)
        })
        if(!response.ok){
            throwErrorFn(response)
        }
        const resData = await response.json();
        const ACTION = pageNo === 1 ? LOAD_PROJECTS : LOAD_MORE_PROJECTS  
        dispatch({ type : ACTION , projects : resData.data.projects })
    }
} 

export const loadCompletedProjects = () => {
    return async (dispatch,getState) => {
        const token = getState().auth.token
        const response = await fetch(fetchCompletedProjectsUrl,{
            method : 'GET',
            headers : headersFn(token)
        })
        if(!response.ok){
            throwErrorFn(response)
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
            headers : headersFn(token)
        })
        if(!response.ok){
            throwErrorFn(response)
        }
        dispatch({ type : COMPLETE_PROJECT , id : id })
    }
}

export const deleteProject = (id) => {
    return async (dispatch,getState) => {
        const token = getState().auth.token
        const response = await fetch(deleteProjectUrl(id),{
            method : 'PUT',
            headers : headersFn(token)
        })
        if(!response.ok){
            throwErrorFn(response)
        }        
        dispatch({ type : DELETE_PROJECT , id : id })
    }
}