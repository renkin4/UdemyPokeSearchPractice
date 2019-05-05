import React from 'react';
import { View, Text} from 'react-native';
import { Header, Item, Icon, Input, Button } from "native-base";
import PokeLoader from './PokeLoader.js';
import SearchBody from "./SearchBody";

class Search extends React.Component
{
    state =
    {
        pokeSearch : "",
        onCall : true,
    }
    searchPoke = () =>
    {

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