import { 
    ADD_PROJECT, 
    COMPLETE_PROJECT, 
    DELETE_PROJECT,
    LOAD_COMPLETED_PROJECTS, 
    LOAD_MORE_PROJECTS, 
    LOAD_PROJECTS } from "../types"

const initialState = {
    projects : [],
    completedProjects : []
}

export default (state=initialState,action) => {
    switch(action.type){
        
        case ADD_PROJECT :
            return{
                ...state,
                projects : [ action.project, ...state.projects ]
            }
        
        case COMPLETE_PROJECT : 
            const projectId = state.projects.findIndex(project => project._id === action.id)
            const completedProject = state.projects[projectId]
            return {
                ...state,
                projects : state.projects.filter(
                    project => project._id !== action.id
                ),
                completedProjects : [ completedProject, ...state.completedProjects ]
            }
        
        case DELETE_PROJECT :
            return {
                ...state,
                completedProjects : state.completedProjects.filter(
                    project => project._id !== action.id
                )
            }

        case LOAD_PROJECTS : 
            return{
                ...state,
                projects : action.projects
            }
        
        case LOAD_MORE_PROJECTS : 
            return{
                ...state,
                projects : [ ...state.projects , ...action.projects]
            }

        case LOAD_COMPLETED_PROJECTS : 
            return {
                ...state,
                completedProjects : action.projects
            }
        default : 
            return state
    }
}