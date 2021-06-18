import React from "react";
import './BoekenkastMedailles.css';

class BoekenkastMedailles extends React.Component{
  state = {}

  render(){
    return(
      <React.Fragment>
        <article className="boekenkastZijde">
          <section className="boekenkastSection--top" style={{background: this.props.kast_kleur_primary}}>
            <article className="medaillesSection">
              <h1 className="medaillesSection__header"> Medailles </h1>
              <ul className="medaillesSection__list">
                {this.props.medailles.map((medaille, index) =>
                  <li key={medaille.id} className="medaillesSection__listItem">
                    <figure className="medaillesSection__medailleslot">
                      <img className="medaillesSection__medailleslot__image" src={medaille.image} alt={medaille.naam + " Medaille"} />
                    </figure>
                  </li>
                )}
              </ul>
            </article>
          </section>
          <section className="boekenkastSection--bottom" style={{background: this.props.kast_kleur_primary}}>
          </section>
        </article>
      </React.Fragment>
    );
  }
}

export default BoekenkastMedailles;
