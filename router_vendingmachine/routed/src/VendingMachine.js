import React, { Component } from 'react';
import {Link} from "react-router-dom";

class VendingMachine extends Component{
    render(){
        return(
            <div>
                <h1>hello v</h1>
                <Link exact to="/soda">Soda</Link>
                <Link exact to="/chips">Chips</Link>
                <Link exact to="/sardines">Sardines</Link>
            </div>
        );
    }
}
export default VendingMachine;