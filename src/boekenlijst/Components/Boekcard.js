import React from 'react';
import { Link } from "react-router-dom";

class Boekcard extends React.Component {

    render(){

        return(
            <article className="boekencard">
                <section className="boekencard__imagesection">
                    <figure className="boekencard__imagesection__figure">
                        <img className="boekencard__imagesection__figure__img" src={this.props.img}  alt="afbeelding van cover" />
                        <figcaption className="boekencard__imagesection__figure__figcaption"></figcaption>
                    </figure>
                </section>
                <header className="boekencard__header">
                    <h2 className="boekencard__header__titel"> {this.props.titel || "Titel"} </h2>
                    <h3 className="boekencard__header__auteur"> {this.props.auteur || "Auteur"} </h3>
                </header>
                <section className="boekencard__buttonsection">
                    <Link to={"/boekenlijst/detail/" + this.props.id} className="boekencard__buttonsection__link"> {this.props.buttonTekst || "naar detail boek"} </Link>
                </section>
            </article>
        );
    }
}

export default Boekcard;