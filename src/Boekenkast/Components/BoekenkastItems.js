import React from "react";
import './BoekenkastItems.css';

class BoekenkastItems extends React.Component{
  state = {}

  render(){
    return(
      <React.Fragment>
        <article className="boekenkastZijde">
          <section className="boekenkastSection--top" style={{background: this.props.kast_kleur_primary}}>
            <article className="itemsSection__container">
              <div className="itemsSection__bookshelf" style={{background: this.props.kast_kleur_secondary}}>
                <div className="itemsSection__shelfBook--red">
                  <div className="itemsSection__shelfBook__Label--high"></div>
                </div>
                <div className="itemsSection__shelfBook--green">
                  <div className="itemsSection__shelfBook__Label--low"></div>
                </div>
                <div className="itemsSection__shelfBook--yellow">
                  <div className="itemsSection__shelfBook__Label--high"></div>
                </div>
                <div className="itemsSection__shelfBook--purple itemsSection__shelfBook--tilted">
                  <div className="itemsSection__shelfBook__Label--high"></div>
                  <div className="itemsSection__shelfBook__Label--low"></div>
                </div>
                <div className="itemsSection__shelfBook--blue">
                  <div className="itemsSection__shelfBook__Label--high"></div>
                </div>
              </div>
              <div className="itemsSection__itemshelf" style={{background: this.props.kast_kleur_secondary}}>
                <figure className="itemsSection__itemslot">
                  <img className="itemsSection__itemslot__image" src="img/default_item_kastdecoratie.png" alt="INVULLEN" />
                </figure>
                <figure className="itemsSection__itemslot">
                  <img className="itemsSection__itemslot__image" src="img/default_item_kastdecoratie.png" alt="INVULLEN" />
                </figure>
                <figure className="itemsSection__itemslot">
                  <img className="itemsSection__itemslot__image" src="img/default_item_kastdecoratie.png" alt="INVULLEN" />
                </figure>
              </div>
              <div className="itemsSection__itemshelf" style={{background: this.props.kast_kleur_secondary}}>
                <figure className="itemsSection__itemslot">
                  <img className="itemsSection__itemslot__image" src="img/default_item_kastdecoratie.png" alt="INVULLEN" />
                </figure>
                <figure className="itemsSection__itemslot">
                  <img className="itemsSection__itemslot__image" src="img/default_item_kastdecoratie.png" alt="INVULLEN" />
                </figure>
                <figure className="itemsSection__itemslot">
                  <img className="itemsSection__itemslot__image" src="img/default_item_kastdecoratie.png" alt="INVULLEN" />
                </figure>
              </div>
            </article>
          </section>
          <section className="boekenkastSection--bottom" style={{background: this.props.kast_kleur_primary}}>
          </section>

        </article>
      </React.Fragment>
    );
  }
}

export default BoekenkastItems;
