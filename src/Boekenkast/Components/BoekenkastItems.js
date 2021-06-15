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
                <div className="itemsSection__shelfBook itemsSection__shelfBook--red"></div>
                <div className="itemsSection__shelfBook itemsSection__shelfBook--green"></div>
                <div className="itemsSection__shelfBook itemsSection__shelfBook--yellow"></div>
                <div className="itemsSection__shelfBook itemsSection__shelfBook--purple itemsSection__shelfBook--tilted"></div>
                <div className="itemsSection__shelfBook itemsSection__shelfBook--blue"></div>
              </div>
              <div className="itemsSection__itemshelf" style={{background: this.props.kast_kleur_secondary}}>
                <div className="itemsSection__itemslot"></div>
                <div className="itemsSection__itemslot"></div>
                <div className="itemsSection__itemslot"></div>
              </div>
              <div className="itemsSection__itemshelf" style={{background: this.props.kast_kleur_secondary}}>
                <div className="itemsSection__itemslot"></div>
                <div className="itemsSection__itemslot"></div>
                <div className="itemsSection__itemslot"></div>
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
