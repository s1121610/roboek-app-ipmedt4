import React from "react";
import './App.css';
import BoekenlijstList from "./BoekenlijstList";

class App extends React.Component {

  state = {titel: "", img: "", auteur: "", voortgang: ""}

  cardClicked = id => {
    console.log("kaart " + id);
  }
  render(){
    return (
      <BoekenlijstList titel={this.state.titel} img={this.state.img} auteur={this.state.auteur} voortgang={this.state.voortgang} cardClicked = {this.cardClicked}/>
    );
  }
}


export default App;
