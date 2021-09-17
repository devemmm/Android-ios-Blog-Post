import React from 'react';
import createDataContext from './createDataContext';


const blogReducer = (state, action)=>{

    switch(action.type){
        case 'add_blogpost':
            return [...state, {id: Math.floor(Math.random() * 9999), title: action.payload.title, content: action.payload.content}]
        
        case 'delete_blogpost':
            return state.filter((blogpost)=> blogpost.id !== action.payload)
        
        case 'update_blogpost':

            return state.map((blogpost)=>{
                if(blogpost.id === action.payload.id){
                    return action.payload
                }else{
                    return blogpost 
                }
            })
        
        default:
            return state
    }

}

const addBlogPost = dispatch =>{
    return (title, content, callback)=>{
        dispatch({type: 'add_blogpost', payload: {title, content}})
        callback()
    }
}

const deleteBlogPost = dispatch =>{
    return (id)=> dispatch({type: 'delete_blogpost', payload: id})
}


const updateBlogPost = dispatch =>{
    return (id, title, content, callback)=> {
        dispatch({type: 'update_blogpost', payload: {id, title, content}})
        callback()
    }
}


const initialValue = {
    id: 1,
    title: 'TEST POST',
    content: 'TEST CONTENT'
}

export const {Context, Provider} = createDataContext(blogReducer, {addBlogPost, deleteBlogPost, updateBlogPost}, [initialValue])
