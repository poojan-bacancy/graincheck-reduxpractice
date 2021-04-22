import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { useSelector} from 'react-redux'
import AuthNavigator from './AuthNavigator'
import AppNavigator from './AppNavigator'

const RootNavigator = () => {

    const token = useSelector( state => state.auth.token)
    
    return(
        <NavigationContainer>
            {
                token 
                ? <AppNavigator/>
                : <AuthNavigator/>
            }
        </NavigationContainer>
    );

}

export default RootNavigator