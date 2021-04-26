import React, { useState } from 'react'
import { StyleSheet, Text, View , Keyboard, TouchableWithoutFeedback , Alert  } from 'react-native'
import strings from 'constants/strings'
import colors from 'constants/colors'
import LoginHeader from './components/LoginHeader'
import FormInput from './components/FormInput'
import { Field, reduxForm } from 'redux-form';
import CustomButton from 'globalcomponents/CustomButton'
import { required , email , password} from './validation'
import { useDispatch } from 'react-redux';
import { login } from 'store/actions/authActions'
import LoadingComponent from './components/LoadingComponent'

const LoginScreen = (props) => {

    const [isLoading,setIsLoading] = useState(false)
    const loadingFn = () => setIsLoading(true)
    const cancleLoadingFn = () => setIsLoading(false)
    const dispatch = useDispatch()

    const screenStrings = strings.loginScreen
    const { formFields , formPlaceholders , inputTypes } = screenStrings

    const onSubmit = async (values) =>{
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
                        label={formFields.username}
                        fieldType={inputTypes.email}
                        placeholder={formPlaceholders.username}
                        validate={[required,email]}
                    />
                    <Field
                        name={inputTypes.password}
                        component={FormInput}
                        label={formFields.password}
                        fieldType={inputTypes.password}
                        placeholder={formPlaceholders.password}
                        forgotPassText={screenStrings.forgotPassLink}
                        validate={[required,password]}
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
