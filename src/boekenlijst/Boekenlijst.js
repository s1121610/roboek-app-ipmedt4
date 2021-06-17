import React from "react";
import "../App.css"
import "./Boekcard.css";
import BoekcardList from "./BoekcardList";

import axios from "axios";

class Boekenlijst extends React.Component {

    state = {
        naam: "",
        auteur: "",
        voortgang: "",
        img: "",
        figcaption: ""
    };

    cardClicked = id => {
        console.log("Hallo kaart " + id);
    }

    componentDidMount() {
        const BASE_URL = 'http://127.0.0.1:8000/api/boekenlijst'
        axios.get(BASE_URL).then(res =>{
            console.log(res.data);
        });
      }


    render(){
        return(
            <BoekcardList naam={this.state.naam} auteur={this.state.auteur} voortgang={this.state.voortgang} img={this.state.img} figcaption={this.state.figcaption} cardClicked = {this.cardClicked}/>
        );
    }

}
    
export default Boekenlijst;