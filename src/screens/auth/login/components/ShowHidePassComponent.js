import React from 'react'
import { StyleSheet } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import colors from 'constants/colors'

const ShowHidePassComponent = (props) => {
    return(
        <Feather
            onPress={props.onPress}
            style={styles.eyeIcon}
            name={props.isVisible ? 'eye' : 'eye-off'}
            size={20}
            color={colors.inputLabel}
        />  
    )
}

export default ShowHidePassComponent

const styles = StyleSheet.create({
    eyeIcon : {
        marginRight : 5
    },
})
