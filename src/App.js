import React, { Component, useState } from "react";
import TopBar from "./Components/TopBar";
import "bootstrap/dist/css/bootstrap.css";
import Banner from "./Components/Banner/Banner";
import Card from "./Components/Card/Card";
//import {Name, cardData} from "./apiData";
import axios from "axios";
import Footer from './Components/Card/footer';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       movieData: [],
 
    };
  }

 componentDidMount(){
  axios.get("https://www.omdbapi.com/?apikey=45f0782a&s=war").then(response =>
  this.setState({movieData: response.data.Search})
 
  )
  
 }

 render() {
    let { movieData } = this.state;
    console.log(movieData);
    return (
      <div>
        <TopBar />
        <Banner
          title="Welcome to FreeMovies.com"
          desc="Get Free Movies to watch here!!!"
        />
        <div className="row row-cols-4 row-cols-md-6 m-4 g-4">
          {movieData.map((card, index) => (
            <Card
            
              data={card}
              key={index}
             
              // changeName={(name) => this.setState({ userName: name })}
            />
          ))}
          
        </div>
        
      </div>
    );
          
  }
}

export default App;
