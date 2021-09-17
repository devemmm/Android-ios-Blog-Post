import React, {useContext} from 'react';
import {Text, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'


const EditScreen = ({navigation, route})=>{
    const {state, updateBlogPost} = useContext(Context)

    const blogPost = state.find((blogpost)=> blogpost.id === route.params.id)
    
    return(
        <BlogPostForm 
            initialValues = {{title: blogPost.title, content: blogPost.content}}
            onSubmit = {(title, content)=>updateBlogPost(blogPost.id, title, content, ()=>navigation.goBack())}
        />
    )
}

const styles = StyleSheet.create({});

export default EditScreen;