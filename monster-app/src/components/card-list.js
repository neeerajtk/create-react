import React from 'react'

const Cardlist = (props) => {
    console.log(props.name)
    console.log(props.children);
    

    return (
        
        <div>
                Hello
                {props.children}
        </div>
    )

}
export default Cardlist;