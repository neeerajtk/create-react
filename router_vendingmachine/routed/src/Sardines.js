import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Sardines extends Component{
    render()
    {
        return(
            <div>
                      <h1>hello s1</h1>
                      <Link to="/">Go Back</Link>
            </div>
        );

        
    }
}

export default Sardines;