import React from 'react'
import colors from 'constants/colors'
import { ActivityIndicator } from 'react-native'

const LoadingComponent = () => {
    return (
        <ActivityIndicator size={30} color={colors.primary} />
    )
}

export default LoadingComponent
