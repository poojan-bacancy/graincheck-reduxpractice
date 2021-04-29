import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import ProjectTile from './ProjectTile'

const ProjectList = (props) => {
    return (
        <FlatList
            data={props.data}
            style={styles.projectList}
            keyExtractor={(item,index) => index}
            renderItem={ (item) => 
                <ProjectTile 
                    project={item.item}
                    onComplete={props.onComplete}  
                />
            }
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
