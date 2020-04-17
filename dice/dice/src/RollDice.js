import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component{

    static defaultProps = {
        sides: ["one","two","three","four","five","six"]
    }; 

    constructor(props){
        super(props);
        this.state={die1: 'one', die2: 'one', rolling: false};
        this.roll=this.roll.bind(this);
    }
    roll(e){
        let newDie1 = this.props.sides[Math.floor(Math.random()*6)];
        let newDie2 = this.props.sides[Math.floor(Math.random()*6)];
        this.setState({die1: newDie1,die2: newDie2, rolling: true});
        setTimeout(()=>{
            this.setState({rolling: false});    
        },1000);
    }

    render(){
        return( 
        <div className="RollDice">
            <div className="container">
            <Die face={this.state.die1} />
            <Die face={this.state.die2} />
            </div>
            <br/>
            <button onClick={this.roll} disabled={this.state.rolling}>
                {this.state.rolling?'Rolling ! ': 'Roll Dice !'  }    
            </button>
        </div>
        )
    }
}

export default RollDice;