import React , { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector ,useDispatch } from 'react-redux'
import Modal from 'react-native-modal';

import colors from 'constants/colors';
import strings from 'constants/strings';

import { loadCompletedProjects } from 'store/actions/projectsActions'

import CloseButton from '../components/CloseButton';
import CompletedProjectsList from '../components/CompletedProjectsList';
import LoadingComponent from 'globalcomponents/LoadingComponent';
import NoDataFoundComponent from 'globalcomponents/NoDataFoundComponent'

const CompletedProjectsModal = ({isVisible,closeModal,onDelete}) => {

    const dispatch = useDispatch()

    const [isLoading,setIsLoading] = useState(false)

    const modalStrings = strings.projectsScreen.compProjectModal

    const completedProjects = useSelector( state => state.projects.completedProjects)

    const renderCompletedProjectsList = () => {
        return isLoading 
            ? <View style={styles.center}><LoadingComponent/></View>
            : completedProjects.length === 0
            ? <View style={styles.center}><NoDataFoundComponent size={17} /></View>
            : <CompletedProjectsList 
                data={completedProjects}  
                onDelete={onDelete} 
            /> 
    }

    const loadCompletedProjectsFn = async () => {
        setIsLoading(true)
        try {
            await dispatch(loadCompletedProjects())
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }

    return (
        <Modal 
            style={styles.modal}
            onModalShow={loadCompletedProjectsFn}
            backdropColor={colors.modalBg}
            backdropOpacity={0.4}
            isVisible={isVisible}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            onBackdropPress={closeModal}
            useNativeDriverForBackdrop={true}
        >
            <View style={styles.modalBox}>

                <View style={styles.modalTitleContainer}>
                    <Text style={styles.modalTitle}>{modalStrings.title}</Text>
                    <CloseButton onPress={closeModal} />
                </View>

                {renderCompletedProjectsList()}
            
            </View>
        </Modal>
    )
}

export default CompletedProjectsModal

const styles = StyleSheet.create({
    modal : {
        justifyContent : 'flex-end',
        marginHorizontal : 20
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
    center : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})
