import React from "react";
import './BoekenkastMedailles.css';

class BoekenkastMedailles extends React.Component{
  state = {}

  render(){
    let legeMedailles = [];
    for(var i = 1; i <= 8; i++){
      if(i > this.props.medailles.length){
        console.log(i);
        legeMedailles.push(
          <li key={i} className="medaillesSection__listItem">
            <figure className="medaillesSection__medailleslot">
              <img className="medaillesSection__medailleslot__image" src="" alt="" />
            </figure>
          </li>
        );
      }
    }
    console.log(legeMedailles);

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
                {legeMedailles}
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
