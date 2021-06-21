import React from "react";

import MobileHeader from "./Components/MobileHeader";
import WelkomTekst from "./WelkomPagina/WelkomTekst";
import WelkomButtonList from "./WelkomPagina/WelkomButtonList";
import SpeechBubble from "./WelkomPagina/SpeechBubble";
import MobileNavigatie from "./MobileNavigatie";

import './WelkomPagina.css'

class WelkomPagina extends React.Component {

    render() {
        return (
            <section>
                <MobileHeader titel="Welkom Bij Roboek"/>
                <WelkomTekst />
                <WelkomButtonList />
                <section className="flex--row">
                    <SpeechBubble />
                    <MobileNavigatie />
                </section>
            </section>
        );
    }
}

export default WelkomPagina;