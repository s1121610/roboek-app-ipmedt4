import React from "react";

import MobileHeader from "../UniverseelComponents/MobileHeader";
import WelkomTekst from "../WelkomPagina/WelkomTekst";
import WelkomButtonList from "../WelkomPagina/WelkomButtonList";
import SpeechBubble from "../WelkomPagina/SpeechBubble";
import MobileNavigatie from "../Navigatie/MobileNavigatie";
import DesktopNav from "../Navigatie/DesktopNavigatie";

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
                    <MobileHeader titel="Welkom Bij Roboek" classNames="titel__figure__img titel__figure__img--displaynone"/>
                    <MobileNavigatie />
                    <WelkomTekst />
                    <WelkomButtonList />
                    <SpeechBubble />
                </section>
            )
        }
    }
}

export default WelkomPagina;
