import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Message from './Message';

class Sardines extends Component{
    render()
    {
        return(
            <div>
                <Message><h1>hello Sardines</h1></Message>
                 <Message> <Link to="/">Go Back</Link></Message> 
                     
            </div>
        );

        
    }
}

export default Sardines;