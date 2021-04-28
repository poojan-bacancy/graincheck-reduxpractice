import React , { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector ,useDispatch } from 'react-redux'
import Modal from 'react-native-modal';
import colors from 'constants/colors';
import strings from 'constants/strings';
import { loadCompletedProjects } from 'store/actions/projectsActions'
import CloseModalButton from '../components/CloseModalButton';
import CompletedProjectsList from '../components/CompletedProjectsList';

const CompletedProjectsModal = (props) => {

    const dispatch = useDispatch()

    const modalStrings = strings.projectsScreen.compProjectModal

    const completedProjects = useSelector( state => state.projects.completedProjects)

    useEffect( async () => {
        try {
            await dispatch(loadCompletedProjects())
        } catch (error) {
            console.log(error)
        }
    }, [])

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

                <CompletedProjectsList 
                    data={completedProjects}  
                    onDelete={props.onDelete} 
                />
            
            </View>
        </Modal>
    )
}

export default CompletedProjectsModal

const styles = StyleSheet.create({
    modal : {
        justifyContent : 'flex-end',
        marginHorizontal : 20,
    },
    modalBox : {
        height : 350,
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
        fontSize : 24,
        fontWeight : '700'
    },
})
