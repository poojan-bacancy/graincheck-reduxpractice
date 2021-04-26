import React, { useState } from 'react'
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import colors from 'constants/colors'
import ProjectsHeader from './components/ProjectsHeader'
import strings from 'constants/strings'
import CompletedButton from './components/CompletedButton'
import AddProjectModal from './modals/AddProjectModal'

const ProjectsScreen = () => {

    const screenStrings = strings.projectsScreen
    const dismissKeyboardFn = () => Keyboard.dismiss()

    const [isAddProjectModalVisible,setIsAddProjectModalVisible] = useState(false)

    const closeAddProjectModal = () => setIsAddProjectModalVisible(false)
    const openAddProjectModal = () => setIsAddProjectModalVisible(true)

    return (
        <TouchableWithoutFeedback onPress={dismissKeyboardFn}>
            <View style={styles.screen}>
                
                <ProjectsHeader
                    title={screenStrings.title}
                    addProjectText={screenStrings.addProjectLink}
                    onAddProject={openAddProjectModal}
                />

                <View style={styles.projectListTitleContainer}>
                    <Text style={styles.projectListTitle}>{screenStrings.projectListTitle}</Text>
                    <CompletedButton label={screenStrings.completedButtonLabel} />
                </View>

                <AddProjectModal
                    isVisible={isAddProjectModalVisible}
                    closeModal={closeAddProjectModal}
                />

            </View>
        </TouchableWithoutFeedback>
    )
}

export default ProjectsScreen

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        backgroundColor : colors.background
    },
    projectListTitleContainer : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        marginHorizontal : 20,
        marginVertical : 15
    },
    projectListTitle : {
        fontSize : 18,
        fontWeight : '700'
    }
})
