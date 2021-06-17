import React from "react";

import Titel from "./WelkomPagina/WelkomTitel";
import WelkomTekst from "./WelkomPagina/WelkomTekst";
import WelkomButtonList from "./WelkomPagina/WelkomButtonList"
import Navigatie from "./Navigatie";

class WelkomPagina extends React.Component {

    render() {
        return (
            <section>
                <Titel />
                <WelkomTekst />
                <WelkomButtonList />
                <Navigatie />
            </section>
        );
    }
}

export default WelkomPagina;