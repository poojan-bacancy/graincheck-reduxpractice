import React, { useState , useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { Keyboard, StyleSheet, Text, View } from 'react-native'

import colors from 'constants/colors'
import strings from 'constants/strings'

import { loadProjects , completeProject } from 'store/actions/projectsActions'

import AddProjectModal from './modals/AddProjectModal'
import CompletedProjectsModal from './modals/CompletedProjectsModal'

import CompletedButton from './components/CompletedButton'
import ProjectList from './components/ProjectList'
import ProjectsHeader from './components/ProjectsHeader'

const ProjectsScreen = (props) => {

    const screenStrings = strings.projectsScreen
    
    const dispatch = useDispatch()

    const projects = useSelector( state => state.projects.projects )

    const [isAddProjectModalVisible,setIsAddProjectModalVisible] = useState(false)
    const closeAddProjectModal = () => setIsAddProjectModalVisible(false)
    const openAddProjectModal = () => setIsAddProjectModalVisible(true)

    const [isCompProjectModalVisible,setIsCompProjectModalVisible] = useState(false)
    const closeCompProjectModal = () => setIsCompProjectModalVisible(false)
    const openCompProjectModal = () => setIsCompProjectModalVisible(true)

    const completeProjectFn = async (id) => {
        try {
            await dispatch(completeProject(id))
        } catch (error) {
            console.log(error)
        }
    }

    const deleteProjectFn = async (id) => {
        try {
            await dispatch(deleteProject(id))
        } catch (error) {
            console.log(error)
        }
    }

    const loadProjectsFn = async () => {
        try {
            await dispatch(loadProjects())
        } catch (error) {
            console.log(error)
        }
    }

    useEffect( () => {
        loadProjectsFn()
    }, []) 

    return ( 
        <View style={styles.screen}>
            
            <ProjectsHeader
                title={screenStrings.title}
                addProjectText={screenStrings.addProjectLink}
                onAddProject={openAddProjectModal}
            />

            <View style={styles.projectListTitleContainer}>
                <Text style={styles.projectListTitle}>
                    {screenStrings.projectListTitle}
                </Text>
                <CompletedButton 
                    onPress={openCompProjectModal}
                    label={screenStrings.completedButtonLabel} 
                />
            </View>

            <ProjectList 
                data={projects} 
                onComplete={completeProjectFn}
                onEndReached={loadProjectsFn}  
            />

            <AddProjectModal
                isVisible={isAddProjectModalVisible}
                closeModal={closeAddProjectModal}
            />
            <CompletedProjectsModal 
                isVisible={isCompProjectModalVisible}
                closeModal={closeCompProjectModal}
                onDelete={deleteProjectFn}
            />
        </View>   
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
