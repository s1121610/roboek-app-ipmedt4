import React from 'react';
import "../App.css";
import "./Gefeliciteerd.css";
import axios from "axios";
import Confetti from 'react-dom-confetti';

const config = {
  angle: 270,
  spread: 180,
  startVelocity: 20,
  elementCount: 300,
  dragFriction: .1,
  duration: 10000,
  stagger: 3,
  width: "10px",
  height: "10px",
  perspective: "100%",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};





class Gefeliciteerd extends React.Component{
  state= {
    muntjes: 0
  }

  componentDidMount() {
      const BASE_URL = 'http://127.0.0.1:8000/api/puzzel/'
      let puzzelId = window.location.pathname.split('/')[2];
      if(puzzelId === ""){
        window.location.replace("/");
      } else {
        axios.get(BASE_URL+ puzzelId)
          .then(res => {
            if(res.data){
              this.setState({
                muntjes: res.data.beloning
              })
            } else {
              window.location.replace("/");
            }
          })
      }
  }

  redirect = () => {
    window.location.replace("/");
  }


  render(){
    return(
      <article className="gefeliciteerd">
        <Confetti className="confetti" active={ this.state.muntjes } config={ config }/>
        <h1 className="gefeliciteerd_h1">Gefeliciteerd!</h1>
        <p className="gefeliciteerd_p">De uitdaging is gelukt. <br /> Je hebt {this.state.muntjes} muntjes verdient! </p>
        <button className="gefeliciteerd__button button" onClick={this.redirect}>Ga verder</button>
      </article>
    )}
}


export default Gefeliciteerd;
