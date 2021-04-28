import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import ProjectTile from './ProjectTile'

const ProjectList = (props) => {
    return (
        <FlatList
            
            keyExtractor={(item,index) => index}
            style={styles.projectList}
            data={props.data}
            renderItem={ (item) => <ProjectTile onComplete={props.onComplete} project={item.item} key={item.index} />}
            onEndReached={props.onEndReached}
        />
    )
}

export default ProjectList

const styles = StyleSheet.create({
    projectList : {
        marginHorizontal : 15
    }
})
