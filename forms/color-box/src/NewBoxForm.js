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
                    <label>Height</label>
                        <input type="text"/>
                    <label>Width</label>
                        <input type="text"/>
                </form>
         
        )
    }
}

export default NewBoxForm;