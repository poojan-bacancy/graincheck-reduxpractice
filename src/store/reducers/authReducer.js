import { AUTHENTICATE, SET_DID_TRY_AL, LOGOUT } from "../types";

const initialState = {
    userId : null,
    token : null,
    didTryAutoLogin : null
}

export default (state=initialState,action) => {
    switch(action.type){
        
        case AUTHENTICATE:
            return{
                token : action.token,
                userId : action.userId,
                didTryAutoLogin : true
            }
        
        case LOGOUT : 
            return initialState

        case SET_DID_TRY_AL :
            return {
                ...state,
                didTryAutoLogin : true
            }
        
        default : 
            return state;
    }
}