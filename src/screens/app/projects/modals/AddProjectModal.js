import React , { useState } from 'react'
import { StyleSheet, Text, View ,Keyboard, TextInput , ToastAndroid } from 'react-native'
import { Field, reduxForm } from 'redux-form';
import { useDispatch } from 'react-redux'
import Modal from 'react-native-modal';

import colors from 'constants/colors';
import strings from 'constants/strings';

import CustomButton from 'globalcomponents/CustomButton'
import LoadingComponent from 'globalcomponents/LoadingComponent'
import CloseButton from '../components/CloseButton';
import FormInput from '../components/FormInput';
import TagTile from '../components/TagTile'

import { addProject } from 'store/actions/projectsActions'
import { required } from 'validations'

const AddProjectModal = (props) => {

    const { reset } = props
    const [tags,setTags] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const modalStrings = strings.projectsScreen.addProjectModal
    const dispatch = useDispatch()

    const showToast = message => ToastAndroid.show(message.toString(),ToastAndroid.SHORT)

    const addTag = (event) => setTags( prevState => [...prevState,event.nativeEvent.text])    

    const removeTag = tag => setTags( tags.filter( tg => tg !== tag) )

    const onSubmit = async (values) => {
        setIsLoading(true)
        Keyboard.dismiss()
        try {
            await dispatch(addProject(values.projectName,values.projectDescription,tags))
            setIsLoading(false)
            props.closeModal() 
            reset()   
        } catch (error) {
            setIsLoading(false)
            showToast(error)
        }
    }

    return (
        <Modal 
            style={styles.modal}
            backdropColor={colors.modalBg}
            backdropOpacity={0.4}
            isVisible={props.isVisible}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            onBackdropPress={props.closeModal}
            onModalHide={() => setTags([])}
            useNativeDriverForBackdrop={true}
        >
            <View style={styles.modalBox}>

                <View style={styles.modalTitleContainer}>
                    <Text style={styles.modalTitle}>{modalStrings.title}</Text>
                    <CloseButton onPress={props.closeModal} />
                </View>
                
                <Field
                    name={'projectName'}
                    component={FormInput}
                    validate={[required]}
                    placeholder={modalStrings.namePlaceholder}
                />
                
                <Field
                    name={'projectDescription'}
                    component={FormInput}
                    validate={[required]}
                    multiline={true}
                    textAlignVertical = "top"
                    placeholder={modalStrings.descriptionPlaceholder}
                />

                <TextInput
                    style={styles.tagInput}
                    onSubmitEditing={addTag}
                    placeholder={modalStrings.tagsPlaceholder}
                    placeholderTextColor={colors.inputLabel}
                />

                <View style={styles.tagsContainer}>
                    {tags.map( (tag,index) => <TagTile key={index} name={tag} remove={removeTag} /> )}
                </View>

                <View style={styles.buttonContainer}>
                    {isLoading
                        ? <LoadingComponent/>
                        : <CustomButton
                            onPress={props.handleSubmit(onSubmit)}
                            buttonLabel={modalStrings.addButton} 
                        />
                    }
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
    buttonContainer : {
        marginHorizontal : 30,
        marginTop : 20
    },
    tagInput : {
        borderColor : colors.placeholder,
        borderWidth : 1,
        borderRadius: 8,
        marginVertical : 15,
        color : colors.input
    },
    tagsContainer : {
        flexWrap : 'wrap',
        flexDirection : 'row',
        justifyContent : 'flex-start',
        alignItems : 'center'
    }
})
