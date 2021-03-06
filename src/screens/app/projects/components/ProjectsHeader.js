import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from 'constants/colors'
import Ionicons from 'react-native-vector-icons/Ionicons'

const ProjectsHeader = (props) => {
    return (
        <View style={styles.header}>
            
            <View style={styles.titleContainer}>

                <View style={styles.titleAndLogoutContainer}>
                    <Text style={styles.title}>{props.title}</Text>
                    <TouchableOpacity activeOpacity={0.7} onPress={props.onLogout}>
                        <Ionicons 
                            name="power-outline"
                            size={25}
                            color={colors.primary}
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity activeOpacity={0.7} onPress={props.onAddProject}>
                    <Text style={styles.addProjectText}>{props.addProjectText}</Text>
                </TouchableOpacity>

            </View>

            {props.children}

        </View>
    )
}

export default ProjectsHeader

const styles = StyleSheet.create({
    header : {
        padding : 20,
        backgroundColor : colors.white,
        borderBottomLeftRadius : 24,
        borderBottomRightRadius : 24
    },
    titleContainer : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        marginBottom : 15
    },
    titleAndLogoutContainer : {
        flexDirection : 'row',
        alignItems : 'center'
    },  
    title : {
        fontSize : 22,
        lineHeight : 27,
        fontWeight : '700',
        marginRight : 5
    },
    addProjectText : {
        fontSize : 17,
        fontWeight: '700',
        color : colors.primary
    }
})
