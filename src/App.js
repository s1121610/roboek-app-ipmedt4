import React from "react";

import Titel from "./WelkomTitel";
import WelkomTekst from "./WelkomTekst";
import WelkomButtonList from "./WelkomButtonList.js"
import './App.css';

class App extends React.Component {

  render(){
    return (
      <article>
        <header>
          <Titel />
        </header>
        <main>
          <article>
            <WelkomTekst />
            <WelkomButtonList />
          </article>
        </main>
      </article>
    );
  }
}

export default App;
