import React , { useState } from 'react'
import { StyleSheet, Text, View , TextInput  } from 'react-native'
import colors from 'constants/colors'
import ShowHidePassComponent from "./ShowHidePassComponent";

const FormInput = ({ input , meta , fieldType , onForgetPassPress , forgotPassText , label , placeholder }) => {

    const { touched , error }  = meta;

    const [isPasswordVisible,setIsPasswordVisible] = useState(false)

    const eyePressHandler = () => setIsPasswordVisible(prevState => !prevState)

    const isEyeIconVisible = () => {
        return fieldType === "password" 
        ?<ShowHidePassComponent isVisible={isPasswordVisible} onPress={eyePressHandler} />
        :null 
    }

    const isErrorVisible = () => {
        return touched && error ? <Text style={styles.errorText}>{error}</Text> : null
    }

    const isForgotPassLinkVisible = () => {
        return fieldType === "password" 
        ? <Text style={styles.forgotPassText} onPress={onForgetPassPress}>{forgotPassText}</Text>
        : null
    }

    return (
        <View style={styles.formInputContainer} >
            <Text style={styles.inputLabel}>{label}</Text>
            <View style={styles.textInputContainer}>
                <TextInput
                    style={styles.input} 
                    secureTextEntry={ fieldType === 'password' && !isPasswordVisible }
                    placeholder={placeholder}
                    placeholderTextColor={colors.placeholder}
                    onChangeText={input.onChange}
                    onFocus={input.onFocus}
                    onBlur={input.onBlur}
                />
                {isEyeIconVisible()}                
            </View>

            {isErrorVisible()}

            {isForgotPassLinkVisible()}
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
