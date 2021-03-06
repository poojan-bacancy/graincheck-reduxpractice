import React, { useState } from 'react'
import { StyleSheet, Text, View , Keyboard, TouchableWithoutFeedback , Alert  } from 'react-native'
import { Field, reduxForm } from 'redux-form';
import { useDispatch } from 'react-redux';

import strings from 'constants/strings'
import colors from 'constants/colors'

import LoginHeader from './components/LoginHeader'
import FormInput from './components/FormInput'
import CustomButton from 'globalcomponents/CustomButton'
import LoadingComponent from 'globalcomponents/LoadingComponent'

import { required , email , password } from 'validations'

import { login } from 'store/actions/authActions'


const LoginScreen = (props) => {

    const [isLoading,setIsLoading] = useState(false)
    const loadingFn = () => setIsLoading(true)
    const cancleLoadingFn = () => setIsLoading(false)
    const dispatch = useDispatch()

    const screenStrings = strings.loginScreen
    const { formFields , formPlaceholders , inputTypes } = screenStrings

    const onSubmit = async (values) => {
        loadingFn()
        try{
            await dispatch(login(values.email,values.password,cancleLoadingFn))
        }catch(error){
            cancleLoadingFn()
            Alert.alert(screenStrings.alertBoxTitle,error.message,[{text:screenStrings.alertBoxButton}]);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>            
            <View style={styles.screen}>
                
                <LoginHeader
                    title={screenStrings.title}
                    subtitle={screenStrings.subtitle}
                />

                <View style={styles.loginForm}>    
                    
                    <Field
                        name={inputTypes.email}
                        component={FormInput}
                        validate={[required,email]}
                        label={formFields.username}
                        fieldType={inputTypes.email}
                        placeholder={formPlaceholders.username}
                    />
                    <Field
                        name={inputTypes.password}
                        component={FormInput}
                        validate={[required,password]}
                        label={formFields.password}
                        fieldType={inputTypes.password}
                        placeholder={formPlaceholders.password}
                        forgotPassText={screenStrings.forgotPassLink}
                        
                    />
                    
                    <View style={styles.buttonContainer}>
                        {isLoading
                        ? <LoadingComponent/>
                        : <CustomButton
                            onPress={props.handleSubmit(onSubmit)}
                            disabled={props.submitting}
                            buttonLabel={screenStrings.loginButtonLabel}
                        />}
                    </View>

                    <View style={styles.newUserLinkContainer}> 
                        <Text style={styles.newUserText}>{screenStrings.isNewUser}</Text>
                        <Text style={styles.signupText}>{screenStrings.signup}</Text>
                    </View>

                </View>
           
            </View>
        </TouchableWithoutFeedback>
    )
}

export default reduxForm({form: 'login-form'})(LoginScreen)

const styles = StyleSheet.create({
    screen : {
        flex : 1
    },
    loginForm : {
        marginHorizontal : 20,
        marginTop : 30
    },
    buttonContainer : {
        marginHorizontal : 40,
        marginTop : 30
    },
    errorText : {
        color : colors.error
    },
    newUserLinkContainer : {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        marginVertical : 20
    },
    newUserText : {
        fontSize : 16,
        color : colors.inputLabel
    },
    signupText : {
        fontSize : 16,
        fontWeight : '700'
    }
})
