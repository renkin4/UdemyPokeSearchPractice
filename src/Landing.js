import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {Button} from 'native-base';

var landingBackground = require('../assets/icons/landing.jpg');

class Landing extends React.Component
{
    render()
    {
        return (
            <View>
                <ImageBackground  source={landingBackground} style = {{width: '100%', height: '100%'}}>
                    <View  style = {style.AppWrapper}> 
                        <Text style = {style.AppTitle}> Welcome To Poke Search</Text>
                        <Button
                            block = {true}
                            style = {style.ButtonStyle}
                            onPress = {() => {}}
                        >
                            <Text style = {style.ButtonText}>
                                Start Searching
                            </Text>
                        </Button>
                    </View>
                </ImageBackground >
            </View>
        )
    }
}

const style = 
{
    AppWrapper :
    {
        flex : 1,
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center',
    },
    AppTitle :
    {
        color : '#6d8bbc',
        fontSize : 30,
        fontWeight : 'bold',
    },
    ButtonStyle :
    {
        margin : 10,
        padding : 10,
    },
    ButtonText : 
    {
        fontSize : 24,
        color : '#FFF',
    },
}

export default Landing;