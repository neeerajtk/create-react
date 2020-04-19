import React, { Component } from 'react'

class CoinContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        }
    }
}