import React from "react";

import Titel from "./WelkomTitel";
import WelkomTekst from "./WelkomTekst";
import WelkomButtonList from "./WelkomButtonList"
import Navigatie from "./Navigatie";
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
        <footer>
          <Navigatie />
        </footer>
      </article>
    );
  }
}

export default App;
