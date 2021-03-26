import React from 'react';

const Card = (props) => {
    return ( 

        <div>
            <h1>{props.name}</h1>
            <h2>{props.age}</h2>
            <h2>{props.adress}</h2>

            <button onClick={() => props.changedName(`${props.name} - ${props.age}`) }>Add to Cart</button>

        </div>
     );
}
 
export default Card;