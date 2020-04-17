import React, { Component } from 'react'

class Update extends Component{
    constructor(props){
        super(props);
        this.state = {clicked: false};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){ 
        var rand = 0; 
        this.rand = Math.floor(Math.random()*10);
        this.setState({clicked:true});
    }

 
    render(){
        return(
            <div className="wrapper">
                <h1>
                    {this.state.clicked ? 'Number is '+this.rand : 'Not Clicked'}
                </h1>
                <h2>
                    {this.rand===7?'Winner':'-'}
                </h2>
                <button className="button" onClick={this.handleClick}>Random Number</button>

            </div>
        )
    }
}

export default Update;