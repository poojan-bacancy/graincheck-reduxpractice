import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import strings from 'constants/strings.js'
import LoginScreeen from 'screens/auth/login'

const AuthStack = createStackNavigator();

const AuthNavigator = () => {

    const authScreens = strings.screens.auth

    const authScreensOptions = {
        headerShown : null
    }

    return(
        <AuthStack.Navigator screenOptions={authScreensOptions}>
            <AuthStack.Screen name={authScreens.login} component={LoginScreeen} />
        </AuthStack.Navigator>
    )
}


export default AuthNavigator