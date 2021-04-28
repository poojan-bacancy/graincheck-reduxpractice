import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import colors from 'constants/colors'
import AsyncStorage from '@react-native-community/async-storage'
import { authenticate , setDidTryAl } from 'store/actions/authActions'
import { useDispatch } from 'react-redux'
import LoadingComponent from 'globalcomponents/LoadingComponent'

const StartupScreen = () => {

    const dispatch = useDispatch();
    
    // trying to login using token from local storage
    useEffect(() => {
        const tryLogin = async () => {

            const userData = await AsyncStorage.getItem('userData')
            
            if(!userData){
                dispatch(setDidTryAl());
                return;
            }
            
            const trandformedData = JSON.parse(userData);
            const { token , userId } = trandformedData;
            dispatch(authenticate(token,userId));

        };
        tryLogin();
    },[dispatch])

    return (
        <View style={styles.screen}>
            <LoadingComponent/>
        </View>
    )
}

export default StartupScreen

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        backgroundColor : colors.white,
        justifyContent : 'center',
        alignItems : 'center'
    }
})