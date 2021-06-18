import React from "react";

import Titel from "./WelkomPagina/WelkomTitel";
import WelkomTekst from "./WelkomPagina/WelkomTekst";
import WelkomButtonList from "./WelkomPagina/WelkomButtonList";
import SpeechBubble from "./WelkomPagina/SpeechBubble";
import Navigatie from "./Navigatie";

import './WelkomPagina.css'

class WelkomPagina extends React.Component {

    render() {
        return (
            <section>
                <Titel />
                <WelkomTekst />
                <WelkomButtonList />
                <section className="flex--row">
                    <SpeechBubble />
                    <Navigatie />
                </section>
            </section>
        );
    }
}

export default WelkomPagina;