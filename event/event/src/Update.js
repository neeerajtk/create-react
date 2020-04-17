import React, { Component } from 'react'

class Update extends Component{
    constructor(props){
        super(props);
        this.state = {num: 0};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){ 
        let rand = Math.floor(Math.random()*10);
        this.setState({num:rand});
    }

 
    render(){
        return(
            <div className="wrapper">
                <h1>
                    Number is {this.state.num} 
                </h1>
                <h2>
                    {this.state.num===7?'Winner':'-'}
                </h2>
                <button onClick={this.handleClick}>Random Number</button>

            </div>
        )
    }
}

export default Update;