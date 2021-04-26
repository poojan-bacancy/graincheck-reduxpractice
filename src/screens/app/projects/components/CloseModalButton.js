import React from 'react'
import { StyleSheet } from 'react-native'
import colors from 'constants/colors';
import AntDesign from 'react-native-vector-icons/AntDesign'

const CloseModalButton = (props) => {
    return (
        <AntDesign
            name="close"
            onPress={props.onPress}
            size={25}
            color={colors.inputLabel}
        />
    )
}

export default CloseModalButton

const styles = StyleSheet.create({})
