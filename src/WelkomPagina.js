import React from "react";

import Titel from "./WelkomPagina/WelkomTitel";
import WelkomTekst from "./WelkomPagina/WelkomTekst";
import WelkomButtonList from "./WelkomPagina/WelkomButtonList"
import Navigatie from "./Navigatie";

import "./WelkomPagina.css";

class WelkomPagina extends React.Component {

    render() {
        return (
            <section>
                <Titel />
                <WelkomTekst />
                <WelkomButtonList />
                <Navigatie className="welkom__nav"/>
            </section>
        );
    }
}

export default WelkomPagina;