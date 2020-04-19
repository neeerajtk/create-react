import React, { Component } from 'react'

class CoinContainer extends Component{
    static defaultProps = {
        coins: [
            {side:'heads',imgSrc: "http://tinyurl.com/react-coin-heads-jpg"},
            {side:'tails',imgSrc: "http://tinyurl.com/react-coin-tails-jpg"}
        ]
    };
    constructor(props){
        super(props);
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        };
this.handleClick = this.handleClick.bind(this);
        
    }
    flipCoin(){
        
    }
    handleClick(e){

    }
    render(){
        return(
        <div className="CoinContainer">
            <h2>Lets flip a coin</h2>
            <button onClick={this.handleClick}>Toss Coin</button>
            <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails.</p> 

        </div>
            )
    }
}

export default CoinContainer;