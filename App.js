import React from 'react';
import { View, Text, Platform, Image, ImageBackground } from "react-native";
import {Button} from 'native-base';

var landingBackground = require('./assets/icons/landing.jpg');

class App extends React.Component
{
    render()
    {
        return(
            <View style = {style.Container}>
                <ImageBackground  source={landingBackground} style = {{width: '100%', height: '100%'}}>
                    <View  style = {style.AppWrapper}> 
                        <Text style = {style.AppTitle}> Welcome To Poke Search</Text>
                    </View>
                </ImageBackground >
            </View>
        );
    }
}

const style = 
{
    Container : 
    {
        flex:1,
    },
    AppWrapper :
    {
        flex : 1,
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center',
        marginTop : Platform.OS == "android" ? 24 : 0,
    },
    AppTitle :
    {
        fontSize : 30,
        fontWeight : 'bold',
    },
}

export default App;