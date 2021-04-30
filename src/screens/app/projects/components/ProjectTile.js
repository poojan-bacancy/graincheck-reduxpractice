import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import moment from 'moment'
import colors from '../../../../constants/colors'

const ProjectTile = ({project,onComplete}) => {

    const date = moment(project.createdAt,'YYYY-MM-DD').format('MMMM DD,YYYY')

    return (
        <View style={styles.projectTile}>

            <View style={styles.dateTitleContainer}> 
                
                <View>
                    <Text style={styles.date}>{date}</Text>
                    <Text style={styles.title}>{project.title}</Text>
                </View>

                <TouchableOpacity activeOpacity={0.7} onPress={onComplete.bind(this,project._id)}>
                    <Ionicons 
                        name="md-checkmark-done-sharp" 
                        size={40}
                        color={colors.primary}
                    />
                </TouchableOpacity>

            </View>

            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>{project.description}</Text>
            </View>
            
        </View>
    )
}

export default ProjectTile

const styles = StyleSheet.create({
    projectTile : {
        backgroundColor : colors.projectTileBg,
        borderRadius : 8,
        padding : 20,
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
        fontSize : 15
    },
    title : {
        fontSize: 22,
        fontWeight : '700',
    },
    descriptionContainer : {
        marginTop : 10,
    },
    description : {
        color : colors.inputLabel
    }
})
