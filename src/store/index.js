import {createStore ,combineReducers , applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import authReducer from './reducers/authReducer'

const rootReducer = combineReducers({
    auth : authReducer,
    form: formReducer
})

const store = createStore(
    rootReducer,
    applyMiddleware(ReduxThunk)
) 

export default store

