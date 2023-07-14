import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/home'
import Meteoros from '../screens/meteor'
import IssLocation from '../screens/issLocation'

const Stack = createStackNavigator()
export default class StackNavigator extends React.Component{
    render(){
        return(
            <Stack.Navigator>
                <Stack.Screen name='home' component={Home}/>
                <Stack.Screen name='issLocation' component={IssLocation}/>
                <Stack.Screen name='meteor' component={Meteoros}/>
            </Stack.Navigator>
        )
    }
}