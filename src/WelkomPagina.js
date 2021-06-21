import React from "react";

import MobileHeader from "./Components/MobileHeader";
import WelkomTekst from "./WelkomPagina/WelkomTekst";
import WelkomButtonList from "./WelkomPagina/WelkomButtonList";
import SpeechBubble from "./WelkomPagina/SpeechBubble";
import MobileNavigatie from "./Navigatie/MobileNavigatie";
import DesktopNav from "./Navigatie/DesktopNavigatie";

import './WelkomPagina.css'

class WelkomPagina extends React.Component {

    render() {
        if (window.innerWidth > 750) {
            return (
                <section>
                    <DesktopNav />
                    <WelkomTekst />
                    <WelkomButtonList />
                </section>
            )
        } else {
            return (
                <section>
                    <MobileHeader titel="Welkom Bij Roboek" />
                    <WelkomTekst />
                    <WelkomButtonList />
                    <section className="flex--row">
                        <SpeechBubble />
                        <MobileNavigatie />
                    </section>
                </section>
            )
        }
    }
}

export default WelkomPagina;