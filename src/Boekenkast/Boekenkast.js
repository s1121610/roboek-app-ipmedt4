import React from "react";
import axios from "axios";
import './Boekenkast.css';

import BoekenkastMedailles from "./Components/BoekenkastMedailles";
import BoekenkastItems from "./Components/BoekenkastItems";
import BoekenkastProfiel from "./Components/BoekenkastProfiel";

class Boekenkast extends React.Component{
  state = {
    aanzicht: 2,
    boekenkast: [],
    eigenaar: []
  }

  componentDidMount() {
    const BASE_URL = "http://localhost:8000/api/boekenkast/";
    axios.get(BASE_URL + this.props.user_id).then(res => {
      console.log("Dit is de data die boekenkast.js terug krijgt:", res.data);
      this.setState({
        boekenkast: res.data.boekenkast,
        eigenaar: res.data.eigenaar
      });
    })
  }

  handleLeftClick = () => {
    if(this.state.aanzicht === 1){this.setState({aanzicht: 3});}
    else{this.setState({aanzicht: this.state.aanzicht - 1});}
  }

  handleRightClick = () => {
    if(this.state.aanzicht === 3){this.setState({aanzicht: 1});}
    else{this.setState({aanzicht: this.state.aanzicht + 1});}
  }

  render(){
    let boekenkast;
    switch(this.state.aanzicht){
      case(1):
        boekenkast = <BoekenkastMedailles kast_kleur_primary={this.state.boekenkast.kast_kleur_primary} kast_kleur_secondary={this.state.boekenkast.kast_kleur_secondary}/>;
        break;
      case(2):
        boekenkast = <BoekenkastItems kast_kleur_primary={this.state.boekenkast.kast_kleur_primary} kast_kleur_secondary={this.state.boekenkast.kast_kleur_secondary}/>;
        break;
      case(3):
        boekenkast = <BoekenkastProfiel kast_kleur_primary={this.state.boekenkast.kast_kleur_primary} kast_kleur_secondary={this.state.boekenkast.kast_kleur_secondary} naam={this.state.eigenaar.naam} saldo={this.state.eigenaar.saldo} aantal_medailles={this.state.eigenaar.aantal_medailles} aantal_boeken={this.state.eigenaar.aantal_boeken}/>;
        break;
      default:
        break;
    }

    return(
      <React.Fragment>
        {boekenkast}
        <section className="boekenkastButtonSection">
          <button className="boekenkastButtonSection__button u-box-shadow" onClick={this.handleLeftClick}><i className="icon-caret-left"></i></button>
          <button className="boekenkastButtonSection__button u-box-shadow" onClick={this.handleRightClick}><i className="icon-caret-right"></i></button>
        </section>
      </React.Fragment>
    );
  }
}

export default Boekenkast;
