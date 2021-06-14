import React from 'react';
import Boekenlijst from "./Boekenlijst";

class BoekenlijstList extends React.Component{

    cardClicked = (id) => {
        this.props.cardClicked(id);
    }

    render(){
        return(
            <section>
        <Boekenlijst
          titel="Dolfje Weerwolfje"
          auteur="Paul van Loon"
          voortgang="2/25 hoofdstukken"
          buttonVerder=">"
          id="1"
          cardClicked = {this.cardClicked}>

        </Boekenlijst>

        <Boekenlijst
          titel="Het oneindige verhaal"
          auteur="Michael Ende"
          voortgang="0/25 hoofdstukken"
          buttonVerder=">"
          id="2"
          cardClicked = {this.cardClicked}>
        </Boekenlijst>

        <Boekenlijst
          titel="De ijstuin"
          auteur="Guy Jones"
          voortgang="2/25 hoofdstukken"
          buttonVerder=">"
          id="3"
          cardClicked = {this.cardClicked}>
        </Boekenlijst>
      </section>
        )
    }
}

export default BoekenlijstList;