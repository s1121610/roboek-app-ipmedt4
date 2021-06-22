import React from "react";
import './App.css';
import Winkel from './Winkel/Winkel';

class App extends React.Component {


  render(){

    return ([
      <section>
        <Winkel user_id='1' />
      </section>
    ]);
  }
}

export default App;
