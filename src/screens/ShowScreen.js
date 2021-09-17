import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext'
import { Feather, MaterialIcons } from '@expo/vector-icons';

const ShowScreen = ({navigation, route})=>{

    const { id } = route.params

    const { state } = useContext(Context)

    const blogPost = state.find((blogpost)=> blogpost.id == id);
    
    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: ()=>(
                <TouchableOpacity onPress={() => navigation.navigate('Edit', {id})}>
                    <Feather name="edit-2" style = { styles.editIcon} />
                </TouchableOpacity>
            )
        })
    }, [navigation])

    return(
        <View>
            <Text style = {styles.title}>{blogPost.title}</Text>
            <Text style = {styles.content}>{blogPost.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    content: {
        fontSize: 16
    },
    editIcon:{
        fontSize: 30,
        color: '#fff',
        marginRight: 15
    }
});

export default ShowScreen;