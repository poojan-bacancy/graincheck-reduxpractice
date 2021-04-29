import React from 'react'
import { StyleSheet, Text,TouchableOpacity } from 'react-native'
import colors from 'constants/colors'
import Ionicons from 'react-native-vector-icons/Ionicons'

const CompletedButton = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={props.onPress} style={styles.completedButton}>
            <Ionicons
                name="checkmark-circle"
                size={20}
                color={colors.primary}
            />
            <Text style={styles.completedButtonText}>{props.label}</Text>
        </TouchableOpacity>
    )
}

export default CompletedButton

const styles = StyleSheet.create({
    completedButton : {
        backgroundColor : colors.white,
        flexDirection : 'row',
        paddingHorizontal : 5,
        paddingVertical : 3,
        borderRadius : 15
    },
    completedButtonText : {
        fontWeight : '500',
        fontSize : 16,
        marginHorizontal : 3,
    }
})
