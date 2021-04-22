import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import colors from 'constants/colors'

const CustomButton = (props) => {
    return (
        <TouchableOpacity 
            disabled={props.disabled} 
            activeOpacity={0.7} 
            style={styles.button} 
            onPress={props.onPress}
        >
            
            <Text style={styles.buttonLabel}>
                {props.buttonLabel}
            </Text>
        
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    button : {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : colors.primary,
        paddingVertical : 10,
        borderRadius  : 25,
    },
    buttonLabel : {
        color : colors.white
    }
})
