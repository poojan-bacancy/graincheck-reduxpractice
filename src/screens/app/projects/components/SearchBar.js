import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import colors from 'constants/colors'
import strings from 'constants/strings'

const SearchBar = (props) => {
    return (
        <View style={styles.searchBar}>
            <Feather 
                name="search"
                size={20}
                color={colors.placeholder}
            />
            <TextInput
                style={styles.input}
                onChangeText={props.onChangeText}
                placeholder={strings.projectsScreen.searchPlaceholder}
                placeholderTextColor={colors.placeholder}
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    searchBar : {
        borderWidth : 1,
        borderColor : colors.outline,
        borderRadius: 8,
        flexDirection : 'row',
        alignItems : 'center',
        paddingHorizontal : 10
    },
    input : {
        flex : 1,
        marginLeft : 5,
        color : colors.input
    }
})
