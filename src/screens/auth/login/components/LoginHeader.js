import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from 'constants/colors'

const LoginHeader = ({title,subtitle}) => {
    return (
        <View style={styles.titleContainer}>
                <Text style={styles.primaryText}>{title}</Text>
                <Text style={styles.secondaryText}>{subtitle}</Text>
            </View>
    )
}

export default LoginHeader

const styles = StyleSheet.create({
    titleContainer : {
        marginTop : 50,
        alignItems : 'center'
    },
    primaryText : {
        color : colors.primary,
        fontSize : 30,
        lineHeight : 32,
        fontWeight : '700'
    },
    secondaryText : {
        color : colors.primary,
        fontSize : 17,
        lineHeight : 22,
        fontWeight : '500'
    }
})
