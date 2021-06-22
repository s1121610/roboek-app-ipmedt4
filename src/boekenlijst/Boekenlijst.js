import React from "react";
import "../App.css"
import "./Boekcard.css";
import BoekcardList from "./BoekcardList";
import EmptyBoekcard from "./EmptyBoekcard";


import axios from "axios";

class Boekenlijst extends React.Component {

    state = {
        boeken: [],
    };

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
        if(this.state.boeken.length === 0){
           return (<EmptyBoekcard />);

        } else{
            
            return(
                <BoekcardList boeken={this.state.boeken}/>
            );
        }
    }

}
    
export default Boekenlijst;