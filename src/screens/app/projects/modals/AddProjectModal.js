import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Field, FieldArray, reduxForm } from 'redux-form';
import Modal from 'react-native-modal';
import colors from 'constants/colors';
import strings from 'constants/strings';
import CustomButton from 'globalcomponents/CustomButton'
import CloseModalButton from '../components/CloseModalButton';
import FormInput from '../components/FormInput';
import { useDispatch } from 'react-redux'
import { addProject } from 'store/actions/projectsActions'

const AddProjectModal = (props) => {

    const modalStrings = strings.projectsScreen.addProjectModal

    const dispatch = useDispatch()

    const onSubmit = async (values) => {
        try {
            await dispatch(addProject(values.projectName,values.projectDescription))    
        } catch (error) {
            console.log(error)
        }
       
    }

    return (
        <Modal 
            style={styles.modal}
            isVisible={props.isVisible}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            onBackdropPress={props.closeModal}
            useNativeDriverForBackdrop={true}
        >
            <View style={styles.modalBox}>
                <View style={styles.modalTitleContainer}>
                    <Text style={styles.modalTitle}>{modalStrings.title}</Text>
                    <CloseModalButton onPress={props.closeModal} />
                </View>
                
                <Field
                    name={'projectName'}
                    placeholder={modalStrings.namePlaceholder}
                    component={FormInput}
                />
                <Field
                    name={'projectDescription'}
                    component={FormInput}
                    multiline={true}
                    textAlignVertical = "top"
                    placeholder={modalStrings.descriptionPlaceholder}
                />
                <FieldArray
                    name={'projectTags'}
                    placeholder={modalStrings.tagsPlaceholder}
                    component={FormInput}
                />


                <View style={styles.buttonContainer}>
                    <CustomButton
                        onPress={props.handleSubmit(onSubmit)}
                        buttonLabel={modalStrings.addButton}                    
                    />
                </View>
            </View>
        </Modal>
    )
}

export default reduxForm({form: 'add-project-form'})(AddProjectModal)

const styles = StyleSheet.create({
    modal : {
        marginHorizontal : 25
    },
    modalBox : {
        borderRadius: 8,
        backgroundColor : colors.white,
        paddingHorizontal : 15,
        paddingVertical : 20
    },
    modalTitleContainer : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between'
    },
    modalTitle : {
        fontSize : 20,
        fontWeight : '700'
    },
    nameInput : {
        borderWidth : 1,
        borderColor : colors.placeholder,
        borderRadius : 8,
        marginTop :15,
        color : colors.input
    },
    descriptionInput : {
        borderWidth : 1,
        borderColor : colors.placeholder,
        borderRadius : 8,
        marginTop :15,
        color : colors.input,
        height : 100
    },
    buttonContainer : {
        marginHorizontal : 30,
        marginTop : 20
    }
})
