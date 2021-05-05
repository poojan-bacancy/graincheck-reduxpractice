import React, { useState , useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { StyleSheet, Text, View , ToastAndroid } from 'react-native'

import colors from 'constants/colors'
import strings from 'constants/strings'

import { loadProjects , completeProject , deleteProject } from 'store/actions/projectsActions'
import { logout } from 'store/actions/authActions'

import AddProjectModal from './modals/AddProjectModal'
import CompletedProjectsModal from './modals/CompletedProjectsModal'

import CompletedButton from './components/CompletedButton'
import ProjectList from './components/ProjectList'
import ProjectsHeader from './components/ProjectsHeader'
import SearchBar from './components/SearchBar'
import LoadingComponent from 'globalcomponents/LoadingComponent'
import NoDataFoundComponent from 'globalcomponents/NoDataFoundComponent'

const ProjectsScreen = (props) => {

    const [isLoading,setIsLoading] = useState(false)
    const [pageNo,setPageNo] = useState(1);
    const [searchTerm,setSearchTerm] = useState('')
    const dispatch = useDispatch()
    const screenStrings = strings.projectsScreen
    const projects = useSelector( state => state.projects.projects )

    const [isAddProjectModalVisible,setIsAddProjectModalVisible] = useState(false)
    const closeAddProjectModal = () => setIsAddProjectModalVisible(false)
    const openAddProjectModal = () => setIsAddProjectModalVisible(true)

    const [isCompProjectModalVisible,setIsCompProjectModalVisible] = useState(false)
    const closeCompProjectModal = () => setIsCompProjectModalVisible(false)
    const openCompProjectModal = () => setIsCompProjectModalVisible(true)

    // whenever error occurs
    const showToast = message => ToastAndroid.show(message.toString(),ToastAndroid.SHORT)

    const completeProjectFn = async (id) => {
        try { await dispatch(completeProject(id)) } 
        catch (error) { showToast(error) }
    }

    const deleteProjectFn = async (id) => {
        try { await dispatch(deleteProject(id)) } 
        catch (error) { showToast(error) }
    }

    const loadProjectsFn = async (pageNo,searchTerm) => {
        try { await dispatch(loadProjects(pageNo,searchTerm)) } 
        catch (error) { showToast(error) }
    }

    const searchHandler = (term) => {
        setPageNo(1)
        setSearchTerm(term)
        loadProjectsFn(1,term) 
    }

    const listEndReachedFn = async () => {
        setPageNo( pgno => pgno + 1 )
        setIsLoading(true)
        await loadProjectsFn(pageNo + 1,searchTerm)
        setIsLoading(false)
    }

    const renderProjectsList = () => {
        return projects.length === 0 
            ? <View style={styles.center}><NoDataFoundComponent size={22}/></View>
            : <ProjectList 
                data={projects} 
                onComplete={completeProjectFn}
                onEndReached={listEndReachedFn}  
             />
    }

    const logoutFn = async () => {
        try { await dispatch(logout()) } 
        catch (error) { showToast(error) }
    }

    useEffect( () => {
        loadProjectsFn(pageNo)
    }, []) 

    return ( 
        <View style={styles.screen}>
            
            <ProjectsHeader
                title={screenStrings.title}
                onLogout={logoutFn}
                addProjectText={screenStrings.addProjectLink}
                onAddProject={openAddProjectModal}
            >
                <SearchBar onChangeText={searchHandler} />
            </ProjectsHeader>

            <View style={styles.projectListTitleContainer}>
                <Text style={styles.projectListTitle}> {screenStrings.projectListTitle} </Text>
                <CompletedButton 
                    onPress={openCompProjectModal}
                    label={screenStrings.completedButtonLabel} 
                />
            </View>

            {renderProjectsList()}

            {isLoading ? <LoadingComponent/> : null}

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
        backgroundColor : colors.backgroundColor
    },
    projectListTitleContainer : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        marginHorizontal : 20,
        marginVertical : 10
    },
    projectListTitle : {
        fontSize : 18,
        fontWeight : '700'
    },
    center : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})
