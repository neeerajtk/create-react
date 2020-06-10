import React from 'react';
import './card-list-styles.css';


const Cardlist = (props) => {
    console.log(props.name)
    console.log(props.children);
    

    return (
        
        <div className="card-list">
                {props.children}
        </div>
    )

}
export default Cardlist;