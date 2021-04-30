import React from 'react'
import { StyleSheet } from 'react-native'
import colors from 'constants/colors';
import AntDesign from 'react-native-vector-icons/AntDesign'

const CloseButton = (props) => {
    return (
        <AntDesign
            name="close"
            onPress={props.onPress}
            size={props.size ? props.size : 25}
            color={colors.inputLabel}
        />
    )
}

export default CloseButton

const styles = StyleSheet.create({})
