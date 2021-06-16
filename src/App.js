import React from "react";
import './App.css';
import Items from './Winkel/Items';

class App extends React.Component {

  render(){

    return ([
      <section>
        <h1>Running</h1>
        <Items />
      </section>
    ]);
  }
}

export default App;
