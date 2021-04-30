import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import moment from 'moment'
import colors from 'constants/colors'

const CompletedProjectTile = ({project,onDelete}) => {

    const date = moment(project.createdAt,'YYYY-MM-DD').format('MMMM DD,YYYY')

    return (
        <View style={styles.projectTile}>
 
            <View>
                <Text style={styles.date}>{date}</Text>
                <Text style={styles.title}>{project.title}</Text>
            </View>

            <TouchableOpacity style={styles.deleteIcon} onPress={onDelete.bind(this,project._id)} >
                <MaterialIcons
                    name="delete" 
                    size={25}
                    color={colors.error}
                />
            </TouchableOpacity>
  
        </View>
    )
}

export default CompletedProjectTile

const styles = StyleSheet.create({
    projectTile : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        backgroundColor : colors.projectTileBg,
        borderRadius : 8,
        padding : 10,
        marginVertical : 10
    },
    dateTitleContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    date : {
        color : colors.inputLabel,
        marginVertical : 5,
    },
    title : {
        fontSize: 22,
        fontWeight : '700',
    },
    deleteIcon : {
        backgroundColor : colors.white,
        borderRadius : 15,
        padding : 5 
    }
})
