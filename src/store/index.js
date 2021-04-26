import {createStore ,combineReducers , applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import authReducer from './reducers/authReducer'
import projectsReducer from './reducers/projectsReducer'

const rootReducer = combineReducers({
    auth : authReducer,
    projects : projectsReducer,
    form: formReducer
})

const store = createStore(
    rootReducer,
    applyMiddleware(ReduxThunk)
) 

export default store

