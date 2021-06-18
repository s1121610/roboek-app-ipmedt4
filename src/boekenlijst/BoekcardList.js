import React from "react";
import "./Boekcard.css";
import Boekcard from "./Boekcard";

class BoekcardList extends React.Component {

    cardClicked = (id) => {
        this.props.cardClicked(id);
    }

    //elk boek krijgt een boekcard met alle informatie
    render(){
        console.log(this.props.boeken)
        return (
            <section className="boekcardlist">
                {this.props.boeken.map(boek =>
                    <Boekcard 
                    key={boek.id}
                    titel={boek.titel}
                    auteur={boek.auteur}
                    voortgang=""
                    buttonTekst=">"
                    img= {"/bibliotheek/" + boek.image}
                    figcaption= {"Het boek " + boek.titel}
                    cardClicked= {this.cardClicked}
                    id={boek.id}
                />
                )}
            </section>
        );
    }
}
    
export default BoekcardList;