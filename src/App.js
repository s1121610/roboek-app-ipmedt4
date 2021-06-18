import React from "react";
import './App.css';
import Winkel from './Winkel/Winkel';

class App extends React.Component {

  render(){

    return ([
      <section>
        <h1>Running</h1>
        <Winkel />
      </section>
    ]);
  }
}

export default App;
