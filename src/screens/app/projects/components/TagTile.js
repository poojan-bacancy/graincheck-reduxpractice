import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../../../constants/colors'
import CloseButton from './CloseButton'

const TagTile = ({name,remove}) => {
    return (
        <View style={styles.tag}>
            <Text style={styles.tagName}>{name}</Text>
            <CloseButton size={15} onPress={remove.bind(this,name)} />
        </View>
    )
}

export default TagTile

const styles = StyleSheet.create({
    tag : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        borderColor : colors.input,
        borderWidth : 1,
        borderRadius : 20,
        padding : 5,
        margin : 5
    },
    tagName : {
        marginRight : 3
    }
})
