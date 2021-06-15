import React from "react";

import './App.css';

// ===== MIJN BOEKENKAST =====
import Boekenkast from "./Boekenkast/Boekenkast";

class App extends React.Component {
  render(){
    return (
      <Boekenkast user_id='1'/>
    );
  }
}

export default App;
