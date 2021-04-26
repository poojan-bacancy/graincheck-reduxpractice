import React , { useRef } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import colors from 'constants/colors'

const FormInput = (props) => {

    const { fields, meta } = props
    const inputRef = useRef();

    const inptStyle = {
        ...styles.input,
        height : props.multiline ? 100 : 50
    }    

    const addTagHandler = (term) => {
        
        if(props.placeholder === 'Enter tags') {
            fields.push({"name" : term})
        }
        inputRef.current.clear()
    }

    return (
        <View>
            <TextInput
                ref={inputRef}
                scrollEnabled={props.multiline}
                onSubmitEditing={(term) => addTagHandler(term)}
                style={inptStyle}
                placeholder={props.placeholder}
                placeholderTextColor={colors.inputLabel}
                multiline={props.multiline}
                textAlignVertical={props.textAlignVertical}
            />
            {/* {   fields
                ? fields.map((name,index) => {
                    return <Text key={index} >{name}</Text>
                } )
                : null
            } */}
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
    }
})
