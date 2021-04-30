import React from 'react'
import { StyleSheet, Text } from 'react-native'
import strings from 'constants/strings'
import colors from 'constants/colors'

const NoDataFoundComponent = ({size}) => {

    const textStyle = {
        ...styles.text,
        fontSize : size
    }

    return (
        <Text style={textStyle}>{strings.noDataFound}</Text>
    )
}

export default NoDataFoundComponent

const styles = StyleSheet.create({
    text : {
        color : colors.primary,
        fontSize : 14,
        fontWeight: '700'
    }
})
