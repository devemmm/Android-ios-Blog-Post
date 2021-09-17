import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { Context } from '../context/BlogContext'

const IndexScreen = ({navigation})=>{

    const {state, addBlogPost, deleteBlogPost} = useContext(Context)
    
    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: ()=>(
                <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                    <Feather name="plus" style = { styles.editIcon} />
                </TouchableOpacity>
            )
        })
    }, [navigation])


    return(
        <View>
            {/* <TouchableOpacity
                style = {{
                    height: 40,
                    backgroundColor: '#21964c', 
                    marginHorizontal: 20, 
                    marginVertical: 10, 
                    borderRadius: 15,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress = {addBlogPost}
            >
                <Text style = {styles.button}> Add Blog Post</Text>
            </TouchableOpacity> */}
            <FlatList 
                data={state}
                keyExtractor = {blogPost=>blogPost.title}
                renderItem = {({item})=>{
                    return(
                        <TouchableOpacity onPress={()=>navigation.navigate("Show", {id: item.id})}>
                            <View style = {styles.row}>
                                <Text style={styles.title}>{item.id} - {item.title}</Text>
                                <TouchableOpacity 
                                    onPress = {()=> deleteBlogPost(item.id)}
                                >
                                    <MaterialIcons name="delete" style = {styles.icon}/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
    
}


const styles = StyleSheet.create({
    button:{
        fontSize: 20,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'grey',
        paddingVertical: 10
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black'
    },
    editIcon:{
        fontSize: 30,
        color: '#fff',
        marginRight: 15
    }
});

export default IndexScreen;