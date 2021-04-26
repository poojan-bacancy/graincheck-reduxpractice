import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { useSelector} from 'react-redux'
import AuthNavigator from './AuthNavigator'
import AppNavigator from './AppNavigator'
import StartupScreen from '../screens/StartupScreen'

const RootNavigator = () => {

    const isAuthenticated = useSelector( state => state.auth.token)
    const didTryAutoLogin = useSelector(state => state.auth.didTryAutoLogin)
    
    return(
        <NavigationContainer>
            {isAuthenticated && <AppNavigator/>}
            {!isAuthenticated && didTryAutoLogin && <AuthNavigator/> }
            {!isAuthenticated && !didTryAutoLogin && <StartupScreen/>}
        </NavigationContainer>
    );

}

export default RootNavigator