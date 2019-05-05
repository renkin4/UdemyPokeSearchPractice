import React from 'react';
import { View, Text} from 'react-native';
import { Header, Item, Icon, Input, Button } from "native-base";
import PokeLoader from './PokeLoader.js';
import SearchBody from "./SearchBody";
import axios from 'axios';

class Search extends React.Component
{
    state =
    {
        pokeSearch : "",
        onCall : true,
    }
    searchPoke = () =>
    {
        this.setState({onCall : true});

        try
        {
            axios.get("http://pokeapi.co/api/v2/pokemon/" + this.state.pokeSearch.toLowerCase())
            .then(function(response)
            {
                console.log(response.data);
            });
        }
        catch (error)
        {
            console.error(`Error received from axios.post: ${JSON.stringify(err)}`);
        }
    }
    renderBody = () =>
    {
        if(this.state.onCall)
        {
            return(
                <PokeLoader />
            )
        }
        else
        {
            return(
                <SearchBody />
            )
        }
    }

    render()
    {
        return (
            <View style = {{flex : 1}} >
                 <Header 
                    searchBar
                    rounded
                 >
                    <Item>
                        <Icon name = "ios-search" onPress = {this.searchPoke}/>
                        <Input 
                            value = {this.state.pokeSearch}
                            placeholder = "Search Pokemon"
                            onChangeText = {(newSearch) => this.setState({pokeSearch : newSearch})}
                            onSubmitEditing = {this.searchPoke}
                        />
                    </Item>
                 </Header>
                 {this.renderBody()}
            </View>
        )
    }
}

const style = 
{


}

export default Search;