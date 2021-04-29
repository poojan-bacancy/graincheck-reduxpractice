import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import strings from 'constants/strings.js'

import ProjectsScreen from 'screens/app/projects'

const AppStack = createStackNavigator();

const AppNavigator = () => {

    const appScreens = strings.screens.app

    const appScreensOptions = {
        headerShown : null
    }

    return(
        <AppStack.Navigator screenOptions={appScreensOptions}>
            <AppStack.Screen name={appScreens.projects} component={ProjectsScreen} />
        </AppStack.Navigator>
    )
}


export default AppNavigator