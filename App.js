import React from 'react';
import { View, Text, Platform } from "react-native";
import Landing from './src/Landing.js';
import Search from './src/Search.js';

var landingBackground = require('./assets/icons/landing.jpg');

class App extends React.Component
{
    state = 
    {
        currentScreen : "Search",
    }
    switchScreen = (newScreen) =>
    {
        if(typeof newScreen !== 'string')
            return;

        this.setState({currentScreen : newScreen});
    }

    renderScreen = () => 
    {
        // console.log(this.state.currentScreen);

        if (this.state.currentScreen == "Landing")
        {
            return(
                <Landing switchScreen = {this.switchScreen}/>
            )
        }
        else if(this.state.currentScreen == "Search")
        {
            return (
                <Search />
            )
        }
    }
    
    render()
    {
        return(
            <View style = {style.Container}>
                {this.renderScreen()}
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