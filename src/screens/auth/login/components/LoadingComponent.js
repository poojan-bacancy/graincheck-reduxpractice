import React from 'react'
import colors from 'constants/colors'
import { StyleSheet, ActivityIndicator, View } from 'react-native'

const LoadingComponent = () => {
    return (
        <View style={styles.screen}>
            <ActivityIndicator size={30} color={colors.primary} />
        </View>
    )
}

export default LoadingComponent

const styles = StyleSheet.create({
    screen: {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})
