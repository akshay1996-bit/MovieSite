import React, {useState} from 'react';


const Card = ({data, index}) => {
  const [showTitle, setshowTitle] = useState(false);
  let {Title,Year,imdbID,Type,Poster} = data
    return (
  
      <div className="card bg-dark text-white m-2">
  <img src={Poster} class="card-img" alt="..."
  onMouseOver = {() => setshowTitle(true)}
  onMouseOut = {() => setshowTitle(false)}
  
  />

 {showTitle &&
  <div className="card-img-overlay">
 
    <h5 className="card-title">{Title}</h5>
    <p className="card-text">{Year}</p>
    <p className="card-text"></p>
  
  </div>
}
</div>


     )
}
 
export default Card;
