import React from 'react';
import { ScrollView, Text, Image } from 'react-native';

class SearchBody extends React.Component
{
    render()
    {
        var pokemon = this.props.data;

        // When Can't Find Anything
        if(!pokemon)
        {
            return (
                <ScrollView/>
            )
        }
        
        // When found a pokemon
        return(
            <ScrollView style = {{flex : 1}}>
                <Text style = {style.Header}>
                    #{pokemon.id} - {pokemon.name.toUpperCase()}
                </Text>
                <Image 
                    source = {{uri : pokemon.sprites.front_default}}
                    style = {style.PokeImage}
                />
            </ScrollView>
        )
    }
}

const style = 
{
    Header : 
    {
        fontSize : 30,
        color : '#6d8bbc',
        textAlign : 'center',
    },
    ViewStyle : 
    {
        justifyContent : 'center',
        alignItems : 'center',
        flex : 1,
    },
    PokeImage :
    {
        backgroundColor : '#404444',
        height : 400,
        width : 400,
        justifyContent : 'center',
        alignItems : 'center',
    }
}

export default SearchBody;