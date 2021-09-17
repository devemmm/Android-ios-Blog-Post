import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from './src/context/BlogContext';
import IndexScreen from './src/screens/IndexScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import ShowScreen from './src/screens/ShowScreen';


const stack = createStackNavigator();

const App = ()=>{
  return(
    <NavigationContainer>
      <stack.Navigator initialRouteName = "Index">
        <stack.Screen
          name = "Index"
          component = { IndexScreen}
          options = {{
            title: "Blogs",
            headerStyle:{
              backgroundColor: 'green'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center'
          }}
        />

        <stack.Screen
          name = "Create"
          component = { CreateScreen }
          options = {{
            title: "Blog",
            headerStyle:{
              backgroundColor: 'green'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center'
          }}
        />

        <stack.Screen
          name = "Edit"
          component = { EditScreen }
          options = {{
            title: "Edit Content",
            headerStyle:{
              backgroundColor: 'green'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center'
          }}
        />

        <stack.Screen
          name = "Show"
          component = { ShowScreen }
          options = {{
            title: "Show Content",
            headerStyle:{
              backgroundColor: 'green'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center'
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default ()=>{
  return(
    <Provider>
      <App/>
    </Provider>
  )
}