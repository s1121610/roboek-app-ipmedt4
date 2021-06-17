import React from "react";
import "./Boekcard.css";
import Boekcard from "./Boekcard";

class BoekcardList extends React.Component {

    cardClicked = (id) => {
        this.props.cardClicked(id);
    }

    render(){
        return (
            <section className="boekcardlist">
                <Boekcard
                    titel=""
                    auteur=""
                    voortgang=""
                    buttonTekst=">"
                    img=""
                    figcaption=""
                    cardClicked= {this.cardClicked}
                    id="1"
                />

                <Boekcard
                    titel=""
                    auteur=""
                    voortgang=""
                    buttonTekst=">"
                    img=""
                    figcaption=""
                    cardClicked= {this.cardClicked}
                    id="2"
                />
                <Boekcard
                    titel=""
                    auteur=""
                    voortgang=""
                    buttonTekst=">"
                    img=""
                    figcaption=""
                    cardClicked= {this.cardClicked}
                    id="1"
                />

                <Boekcard
                    titel=""
                    auteur=""
                    voortgang=""
                    buttonTekst=">"
                    img=""
                    figcaption=""
                    cardClicked= {this.cardClicked}
                    id="2"
                />

                
            </section>
        );
    }
}
    
export default BoekcardList;