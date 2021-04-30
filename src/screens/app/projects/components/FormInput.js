import React , { useRef } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import colors from 'constants/colors'

const FormInput = (props) => {

    const { meta : { touched , error } } = props
    const inputRef = useRef();

    const inptStyle = {
        ...styles.input,
        height : props.multiline ? 100 : 50
    }    

    const isErrorVisible = () => {
        return touched && error 
            ? <Text style={styles.errorText}>{error}</Text>
            : null
    }

    return (
        <View>
            <TextInput
                ref={inputRef}
                value={props.input.value}
                scrollEnabled={props.multiline}
                style={inptStyle}
                onChangeText={props.input.onChange}
                onFocus={props.input.onFocus}
                onBlur={props.input.onBlur}
                placeholder={props.placeholder}
                placeholderTextColor={colors.inputLabel}
                multiline={props.multiline}
                textAlignVertical={props.textAlignVertical}
            />
            {isErrorVisible()}
        </View>
    )
}

export default FormInput

const styles = StyleSheet.create({
    input : {
        paddingHorizontal : 5,
        borderWidth : 1,
        borderColor : colors.placeholder,
        borderRadius : 8,
        marginTop :15,
        color : colors.input
    },
    errorText : {
        marginTop : 5,
        color : colors.error
    }
})
