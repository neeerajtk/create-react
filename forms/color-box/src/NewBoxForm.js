import React, { Component } from 'react'

class NewBoxForm extends Component{
    render(){
        return(
            <div>
                <form>
                    <label>Height</label>
                        <input type="text"/>
                    <label>Width</label>
                        <input type="text"/>
                </form>
            </div>
        )
    }
}

export default NewBoxForm;