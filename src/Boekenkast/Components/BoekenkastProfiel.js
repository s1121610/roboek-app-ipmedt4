import React from "react";
import './BoekenkastProfiel.css';

class BoekenkastProfiel extends React.Component{
  state = {}

  render(){
    return(
      <React.Fragment>
        <article className="boekenkastZijde">
          <section className="boekenkastSection--top" style={{background: this.props.kast_kleur_primary}}>
              <article className="profielSection">
                <h1 className="profielSection__header"> Profiel </h1>
                <ul className="profielSection__list">
                  <li className="profielSection__listItem">
                    <article>
                      <heading className="profielSection__listItem__heading">
                        <figure className="profielSection__listItem__figure">
                          <img className="profielSection__listItem__image" alt="Icon" />
                        </figure>
                        <h1> Naam </h1>
                      </heading>
                      <p className="profielSection__listItem__text"> {this.props.naam} </p>
                    </article>
                  </li>
                  <li className="profielSection__listItem">
                    <article>
                      <heading className="profielSection__listItem__heading">
                        <figure className="profielSection__listItem__figure">
                          <img className="profielSection__listItem__image" alt="Icon" />
                        </figure>
                        <h1> Munten </h1>
                      </heading>
                      <p className="profielSection__listItem__text"> {this.props.saldo} </p>
                    </article>
                  </li>
                  <li className="profielSection__listItem">
                      <article>
                        <heading className="profielSection__listItem__heading">
                          <figure className="profielSection__listItem__figure">
                            <img className="profielSection__listItem__image" alt="Icon" />
                          </figure>
                          <h1> Medailles </h1>
                        </heading>
                      <p className="profielSection__listItem__text"> {this.props.aantal_medailles} </p>
                    </article>
                  </li>
                  <li className="profielSection__listItem">
                    <article>
                      <heading className="profielSection__listItem__heading">
                        <figure className="profielSection__listItem__figure">
                          <img className="profielSection__listItem__image" alt="Icon" />
                        </figure>
                        <h1> Gelezen Boeken </h1>
                      </heading>
                      <p className="profielSection__listItem__text"> {this.props.aantal_boeken} </p>
                    </article>
                  </li >
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

export default BoekenkastProfiel;
