import React from 'react';
import { View, Text, Platform } from "react-native";
import Landing from './src/Landing.js';

var landingBackground = require('./assets/icons/landing.jpg');

class App extends React.Component
{
    render()
    {
        return(
            <View style = {style.Container}>
               <Landing />
            </View>
        );
    }
}

const style = 
{
    Container : 
    {
        flex:1,
        marginTop : Platform.OS == "android" ? 24 : 0,
    },
}

export default App;