import React from "react";
import "./DetailBoekcard.css";

class DetailBoekcard extends React.Component {


    render(){
        return(
            <section className="detailboekcard">
                <section className="detailboekcard__imagesection">
                    <figure className="detailboekcard__imagesection__figure">
                        <img className="detailboekcard__imagesection__figure__img" src={this.props.image} alt="afbeelding van cover"/>
                        <figcaption className="detailboekcard__imagesection__figure__figcaption"></figcaption>
                    </figure>
                </section>
                <header className="detailboekcard__header">
                    <h2 className="detailboekcard__header__titel">{this.props.titel}</h2>
                    <h3 className="detailboekcard__header__auteur">{this.props.auteur}</h3>
                    <p className="detailboekcard__header__hoofdstukken">{this.props.gelezenHoofdstukkenTeller}/{this.props.hoofdstukken} gelezen hoofdstukken</p>
                </header>
            </section>    
        );
    }
}
    
export default DetailBoekcard;