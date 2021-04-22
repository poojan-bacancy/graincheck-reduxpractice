import React , { useState } from 'react'
import { StyleSheet, Text, View , TextInput  } from 'react-native'
import colors from 'constants/colors'
import ShowHidePassComponent from "./ShowHidePassComponent";

const FormInput = (props) => {

    const { meta : { touched , error } } = props;

    const [isPasswordVisible,setIsPasswordVisible] = useState(false)

    const eyePressHandler = () => {
        setIsPasswordVisible(prevState => !prevState)
    }

    return (
        <View style={styles.formInputContainer} >
            <Text style={styles.inputLabel}>{props.label}</Text>
            <View style={styles.textInputContainer}>
                
                <TextInput
                    // {...props.inputProps}
                    style={styles.input} 
                    value={props.input.value}
                    secureTextEntry={ props.fieldType === 'password' && !isPasswordVisible }
                    placeholder={props.placeholder}
                    placeholderTextColor={colors.placeholder}
                    onChangeText={props.input.onChange}
                    onFocus={props.input.onFocus}
                    onBlur={props.input.onBlur}
                />
                
                {props.fieldType === "password"
                    && 
                <ShowHidePassComponent isVisible={isPasswordVisible} onPress={eyePressHandler} />}
                
            </View>

            {touched && error ? <Text style={styles.errorText}>{error}</Text> : undefined}

            {props.fieldType === "password" 
                && 
            <Text style={styles.forgotPassText} onPress={props.onForgetPassPress}>{props.forgotPassText}</Text>
            }
        </View>
    )
}

export default FormInput

const styles = StyleSheet.create({
    formInputContainer : {
        marginVertical : 10
    },
    inputLabel : {
        color : colors.inputLabel,
        fontSize : 17,
        fontWeight : '500'
    },
    textInputContainer : {
        flexDirection : 'row',
        alignItems : 'center',
        borderBottomColor : colors.outline,
        borderBottomWidth : 1
    },
    input : {
        flex : 1,
        fontSize : 15,
        color : colors.input
    },
    forgotPassText : {
        textAlign : 'right',
        marginTop : 5,
        color : colors.inputLabel
    },
    errorText : {
        marginTop : 5,
        color : colors.error
    }
})
