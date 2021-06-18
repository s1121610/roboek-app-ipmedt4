import React from "react";
import "../App.css"
import "./Boekcard.css";
import BoekcardList from "./BoekcardList";

import axios from "axios";

class Boekenlijst extends React.Component {

    state = {
        boeken: [],
    };

    cardClicked = id => {
        console.log("Hallo kaart " + id);
    }

    //informatie ophalen voor de boekcards
    componentDidMount() {
        const BASE_URL = 'http://127.0.0.1:8000/api/boekenlijst/'
        axios.get(BASE_URL + this.props.user_id).then(res =>{
            console.log(res.data);
            this.setState({
                boeken: res.data.boeken,
            })
        });
      }


    render(){
        //meegeven van state boeken naar de boekcard
        return(
            <BoekcardList boeken={this.state.boeken}  cardClicked = {this.cardClicked}/>
        );
    }

}
    
export default Boekenlijst;