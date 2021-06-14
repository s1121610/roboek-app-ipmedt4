import React from "react";
import "./App.css";
import "./Boekenlijst.css";

class Boekenlijst extends React.Component {

    onCardClicked = () => {
        this.props.cardClicked(this.props.id);
    }
    render(){
        return (
        <article className="boekenkaart">
            <header className="boekenkaart__header">
                <h2 className="boekenkaart__header__titel">
                    {this.props.titel || "Titel boek"}
                </h2>
                <h3 className="boekenkaart__header__auteur">
                    {this.props.auteur || "Auteur"}
                </h3>
            </header>
            <section className="boekenkaart__image">
                <figure>
                    <img>{this.props.image}</img>
                </figure>
            </section>
            <section className="boekenkaart__voortgang">
                <p>
                    {this.props.voortgang || "Voortgang"}
                </p>
            </section>
            <button className="boekenkaart__verder" onClick = {this.onCardClicked}>{this.props.buttonVerder}</button>
        </article>
        );
    }
}

export default Boekenlijst;