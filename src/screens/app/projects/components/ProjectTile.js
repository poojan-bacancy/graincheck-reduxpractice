import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../../../../constants/colors'
import Ionicons from 'react-native-vector-icons/Ionicons'

const ProjectTile = ({project,onComplete}) => {
    return (
        <View style={styles.projectTile}>

            <View style={styles.dateTitleContainer}> 
                
                <View>
                    <Text style={styles.date}>{project.createdAt}</Text>
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
