import React from "react";
import './App.css';
import BoekenlijstList from "./BoekenlijstList";

class App extends React.Component {

  cardClicked = id => {
    console.log("kaart " + id);
  }
  render(){
    return (
      <BoekenlijstList cardClicked = {this.cardClicked}/>
    );
  }
}


export default App;
