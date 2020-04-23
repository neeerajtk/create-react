import React, { Component } from 'react'

class NewBoxForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            height: "",
            width: "",
            color:""
        };
    }
   
    render(){
        return(

                <form>
                    <label htmlFor="width">Height</label>
                        <input 
                        type="text" 
                        name="height" 
                        value={this.state.height}
                        id="height"/>
                    <label htmlFor="width">Width</label>
                        <input 
                        type="text"
                        name="width"
                        value={this.state.width}
                        id="width"
                        />
                </form>
         
        )
    }
}

export default NewBoxForm;