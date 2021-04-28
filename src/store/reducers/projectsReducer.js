import { INC_PAGE_NO, LOAD_COMPLETED_PROJECTS, LOAD_PROJECTS } from "../types"


const initialState = {
    pageNo : 1,
    projects : [],
    completedProjects : []
}

export default (state=initialState,action) => {
    switch(action.type){
        // case INC_PAGE_NO :
        //     return{
        //         ...state,
        //         pageNo : state.pageNo + 1
        //     }
        case LOAD_PROJECTS:
            return {
                pageNo : state.pageNo + 1,
                projects : [...state.projects , ...action.projects] ,
                completedProjects : state.completedProjects,
            };
        case LOAD_COMPLETED_PROJECTS : 
            return {
                ...state,
                projects : state.projects,
                completedProjects : [...state.completedProjects , ...action.completedProjects]
            }
        default : 
            return state
    }
}