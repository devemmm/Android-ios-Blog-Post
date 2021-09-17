import React, {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


const BlogPostForm = ({onSubmit, initialValues})=>{

    const [title, setTitle] = useState(initialValues.title)
    const [content, setContent] = useState(initialValues.content)

    return(
        <View style= {styles.container}>
            <Text style = { styles.title}>Enter Title:</Text>
            <TextInput 
                style = {styles.iniput}
                autoCapitalize = "none"
                autoCorrect = {false}
                value = {title}
                onChangeText = {(newTitle)=>setTitle(newTitle)}
            />

            <Text style = { styles.title}>Enter Content:</Text>
            <TextInput 
                style = {styles.iniput}
                autoCapitalize = "none"
                autoCorrect = {false}
                value = {content}
                onChangeText = {(newContent)=>setContent(newContent)}
            />

            <TouchableOpacity
                style = {styles.button}
                onPress = {()=>onSubmit(title, content)}
            >
                <Text style = {styles.buttonText}>Save</Text>
            </TouchableOpacity>
        </View>
    )
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 30
    },
    iniput: {
        fontSize: 20,
        borderColor: 'black',
        borderRadius: 10,
        paddingLeft: 20,
        borderWidth: 1,
        height: 40,
        color: 'grey'

    },
    button:{
        backgroundColor: '#21964c',
        marginTop: 50,
        marginLeft: 100,
        width: 100,
        height: 50,
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        alignSelf: 'center'
    }
})

export default BlogPostForm