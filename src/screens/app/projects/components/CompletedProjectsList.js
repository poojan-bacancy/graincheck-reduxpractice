import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import CompletedProjectTile from './CompletedProjectTile'

const CompletedProjectsList = (props) => {
    return (
        <FlatList
            data={props.data}
            keyExtractor={ (item,index) => index }
            renderItem={(item) => <CompletedProjectTile project={item.item} onDelete={props.onDelete} />}
        />
    )
}

export default CompletedProjectsList

const styles = StyleSheet.create({})
