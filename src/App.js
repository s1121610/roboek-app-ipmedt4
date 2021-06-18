import React from "react";
import './App.css';
import Boekenlijst from "./boekenlijst/Boekenlijst";

class App extends React.Component {

  render(){
    return (
      <Boekenlijst user_id='1'/>
    );
  }
}

export default App;
