import React from 'react';
import { ScrollView, Text, Image, View, ImageBackground, Dimensions } from 'react-native';
import { ListItem, List } from "native-base";

class SearchBody extends React.Component
{
    render()
    {
        var pokemon = this.props.data;

        // When Can't Find Anything
        if(pokemon == null)
        {
            return (
                <ScrollView style = {{flex : 1}}>
                    <Text style = {style.Header}>
                        Sorry Cyka I Can't Find the thing You want 
                    </Text>
                </ScrollView>
            )
        }
        
        // When found a pokemon in PokeAPI
        return(
            <ImageBackground 
                source = {{uri : "https://pokemongolive.com/img/posts/steelix_final.png"}} 
                style = {style.BackgroundImage}
            >
                <ScrollView style = {{flex : 1}}>
                    <Text style = {style.Header}>
                        #{pokemon.id} - {pokemon.name.toUpperCase()}
                    </Text>
                    <View style = {style.PokeImageView }>
                        <Image 
                            source = {{uri : pokemon.sprites.front_default}}
                            style = {style.PokeImage}
                        />
                    </View>
                    <View style = {style.info}>
                        <ListItem itemDivider>
                            <Text style = {{fontWeight : "bold"}}>
                                Size 
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Text>
                                Weight - {pokemon.weight}kg
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Text>
                                Height - {pokemon.height/10} m
                            </Text>
                        </ListItem>

                        <ListItem itemDivider>
                            <Text style = {{fontWeight : "bold"}}>
                                Abilities
                            </Text>
                        </ListItem>
                        <List
                            dataArray ={pokemon.abilities}
                            renderRow=
                            {
                                (item)=> 
                                <ListItem>
                                    <Text>{item.ability.name}</Text>
                                </ListItem>
                            }
                        />
                    </View>
                </ScrollView>
            </ImageBackground>
        )
    }
}

const style = 
{
    BackgroundImage:
    {
        flex : 1,
        resizeMode : "cover",
        width : '100%',
        height : '100%',
    },
    Header : 
    {
        backgroundColor : '#FFF',
        fontSize : 30,
        color : '#083a8c',
        textAlign : 'center',
    },
    ViewStyle : 
    {
        justifyContent : 'center',
        alignItems : 'center',
        flex : 1,
    },
    PokeImageView :
    {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
    PokeImage :
    {
        height : 200,
        width : 200,
        justifyContent : 'center',
        alignItems : 'center',
    },
    info : 
    {
        flex : 1,
        backgroundColor : '#FFF',
        opacity : 0.8,
    },
}

export default SearchBody;