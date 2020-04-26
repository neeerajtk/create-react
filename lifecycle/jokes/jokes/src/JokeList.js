import React, { Component } from 'react';
import axios from 'axios';

class JokeList extends Component{
    async componentDidMount(){
        let joke = await axios.get("https://icanhazdadjokes.com/");
    }
    render(){
        return(
            <div>
                <h1>Dad Jokes</h1>
            </div>
        )
    }
}
export default JokeList;