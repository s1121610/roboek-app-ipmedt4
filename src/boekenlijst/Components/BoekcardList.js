import React from "react";
import "./Boekcard.css";
import Boekcard from "./Boekcard";

class BoekcardList extends React.Component {

    //elk boek krijgt een boekcard met alle informatie
    render(){
        return (
            <article className="boekcardlist">
                {this.props.boeken.map(boek =>
                    <Boekcard 
                    key={boek.id}
                    titel={boek.titel}
                    auteur={boek.auteur}
                    gelezenHoofdstukken={this.props.gelezenHoofdstukken}
                    aantalHoofdstukken={this.props.aantalHoofdstukken}
                    buttonTekst="&#707;"
                    img= {"/bibliotheek/" + boek.image}
                    figcaption= {"Het boek " + boek.titel}
                    id={boek.id}
                />
                )}
            </article>
        );
    }
}
    
export default BoekcardList;