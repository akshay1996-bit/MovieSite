import React from 'react';

const Banner = ({title,desc}) => {
    return ( <div className="jumbotron" style={{backgroundColor : "#E9ECEF "}}>
    <h1 className="display-4">{title}</h1>
    <p className="lead">{desc}</p>
    <hr className="my-4"/>
    
  </div> );
}
 
export default Banner;