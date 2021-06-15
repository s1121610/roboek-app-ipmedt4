import React from "react";
import './BoekenkastMedailles.css';

class BoekenkastMedailles extends React.Component{
  state = {}

  render(){
    return(
      <React.Fragment>
        <article className="boekenkastZijde">
          <section className="boekenkastSection--top" style={{background: this.props.kast_kleur_primary}}>
          </section>
          <section className="boekenkastSection--bottom" style={{background: this.props.kast_kleur_primary}}>
          </section>
        </article>
      </React.Fragment>
    );
  }
}

export default BoekenkastMedailles;
