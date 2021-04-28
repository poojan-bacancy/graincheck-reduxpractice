import { ADD_PROJECT, LOAD_COMPLETED_PROJECTS, LOAD_PROJECTS } from "../types"


const initialState = {
    projects : [],
    completedProjects : []
}

export default (state=initialState,action) => {
    switch(action.type){
        case LOAD_PROJECTS:
            return {
                projects : [...state.projects , ...action.projects] ,
                completedProjects : state.completedProjects
            };
        case LOAD_COMPLETED_PROJECTS : 
            return {
                projects : state.projects,
                completedProjects : [...state.completedProjects , ...action.completedProjects]
            }
        default : 
            return state
    }
}