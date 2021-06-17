import React from 'react';

class Boekcard extends React.Component {

    onCardClicked = () => {
        this.props.cardClicked(this.props.id);
    }

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
                <section className="boekencard__voortgangsectie">
                    <p className="boekencard__voortgangsectie__hoofdstukken"> {this.props.voortgang || "Voortgang hoofdstukken"} </p>
                </section>
                <section className="boekencard__buttonsection">
                    <button className="boekencard__buttonsection__button" onClick = {this.onCardClicked}> {this.props.buttonTekst || "naar detail boek"} </button>
                </section>
            </article>
        );
    }
}

export default Boekcard;