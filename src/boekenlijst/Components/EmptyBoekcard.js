import React from "react";
import { Link } from "react-router-dom";

import "../../App.css";
import "./EmptyBoekcard.css";

class EmptyBoekcard extends React.Component {
    render(){
        return(
            <article className="emptyBoekcard_section">
                <h2 className="emptyBoekcard_section__titel">Je hebt nog geen boek, ga naar de bieb om een boek te pakken!</h2>
                <section className="emptyBoekcard_section__linksection">
                    <Link className="emptyBoekcard_section__linksection__link" to="/genre">Naar Bibliotheek</Link>
                </section>
            </article>

        );
    }
}

export default EmptyBoekcard;
