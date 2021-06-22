import React from "react";

class DetailBoekcard extends React.Component {


    render(){
        return(
            <section className="detailboek">
                <section className="detailboek__imagesection">
                    <figure className="detailboek__imagesection__figure">
                        <img className="detailboek__imagesection__figure__img" src={this.props.image}/>
                        <figcaption className="detailboek__imagesection__figure__figcaption"></figcaption>
                    </figure>
                </section>
                <header className="detailboek__header">
                    <h2 className="detailboek__header__titel">{this.props.titel}</h2>
                    <h3 className="detailboek__header__auteur">{this.props.auteur}</h3>
                </header>
                <section className="detailboek__voortgangsectie">
                    <p className="detailboek__voortgangsectie__hoofdstukken">{this.props.gelezenHoofdstukkenTeller}/{this.props.hoofdstukken} gelezen hoofdstukken</p>
                </section>
            </section>    
        );
    }
}
    
export default DetailBoekcard;