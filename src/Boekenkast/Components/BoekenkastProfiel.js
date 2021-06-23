import React from "react";
import './BoekenkastProfiel.css';

class BoekenkastProfiel extends React.Component{
  state = {}

  render(){
    return(
      <React.Fragment>
        <article className="boekenkast">
          <section className="boekenkastSection--top" style={{background: this.props.kast_kleur_primary}}>
              <article className="profielSection">
                <h1 className="profielSection__header"> Profiel </h1>
                <ul className="profielSection__list">
                  <li className="profielSection__listItem">
                    <article className="profielSection__listItem__infoSection">
                      <figure className="profielSection__listItem__figure">
                        <img className="profielSection__listItem__image" src="img/default_icon_profile.png" alt="Icon" />
                      </figure>
                      <section>
                        <h1 className="profielSection__listItem__header"> Naam </h1>
                        <p className="profielSection__listItem__text"> {this.props.naam} </p>
                      </section>
                    </article>
                  </li>
                  <li className="profielSection__listItem">
                    <article className="profielSection__listItem__infoSection">
                      <figure className="profielSection__listItem__figure">
                        <img className="profielSection__listItem__image" src="img/default_icon_coins.png" alt="Icon" />
                      </figure>
                      <section>
                        <h1 className="profielSection__listItem__header"> Munten </h1>
                        <p className="profielSection__listItem__text"> {this.props.saldo} </p>
                      </section>
                    </article>
                  </li>
                  <li className="profielSection__listItem">
                    <article className="profielSection__listItem__infoSection">
                      <figure className="profielSection__listItem__figure">
                        <img className="profielSection__listItem__image" src="img/default_icon_medal.png" alt="Icon" />
                      </figure>
                      <section>
                        <h1 className="profielSection__listItem__header"> Medailles </h1>
                        <p className="profielSection__listItem__text"> {this.props.behaalde_medailles.length-1} </p>
                      </section>
                    </article>
                  </li>
                  <li className="profielSection__listItem">
                    <article className="profielSection__listItem__infoSection">
                      <figure className="profielSection__listItem__figure">
                        <img className="profielSection__listItem__image" src="img/default_icon_books.png" alt="Icon" />
                      </figure>
                      <section>
                        <h1 className="profielSection__listItem__header"> Gelezen Boeken </h1>
                        <p className="profielSection__listItem__text"> {this.props.aantal_boeken} </p>
                      </section>
                    </article>
                  </li>
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
