import React from 'react';
import axios from 'axios'; // Post request voor gebruiker namen

import './WelkomButtonList.css'

export default class WelkomButtonList extends React.Component {

  constructor (props) {
    super(props);
    this.state = {voornaam: "",leukenaam: ""};
    // Deze twee zijn voor het nakijken van de state en of het werkt. Dit kan later weggehaald worden.
    this.voornaamHandleChange = this.voornaamHandleChange.bind(this);
    this.leukenaamHandleChange = this.leukenaamHandleChange.bind(this);

    this.onChangeVoornaam = this.onChangeVoornaam.bind(this);
    this.onChangeLeukenaam = this.onChangeLeukenaam.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeVoornaam (e) {
    this.setState({ voornaam: e.target.value })
  }
  onChangeLeukenaam (e) {
    this.setState({ leukenaam: e.target.value })
  }

  onSubmit (e) {
    e.preventDefault();

    const userObject = {
      voornaam: this.state.voornaam,
      leukenaam: this.state.leukenaam
    };

    axios.post("http://127.0.0.1:8000/", userObject)
      .then((res) => {
        console.log(res.data);
      }).catch((error) => {
        console.log(error);
      });

    this.setState({ voornaam: "", leukenaam: "" })
  }

  // Deze twee worden gebruikt voor het laten zien dat de sate werkt
  voornaamHandleChange (e) {
    this.setState({
      voornaam: e.target.value
    });
    console.log("Voornaam: " + this.state.voornaam);
  }
  leukenaamHandleChange(e) {
    this.setState({
      leukenaam: e.target.value
    });
    console.log("Leuke: " + this.state.leukenaam);
  }

  render() {
    return (
      <section className="naamInput" >
        <form id="namen" className="naamInput__form" onSubmit={this.onSubmit}>
          <input type="text" id="voornaam" placeholder="Voer hier je naam in" className="naamInput__form__input" 
            onChange={this.voornaamHandleChange} 
            value={this.state.voornaam}
          />
          <input type="text" id="leukenaam" placeholder="Vul een leuke naam in" className="naamInput__form__input" 
            onChange={this.leukenaamHandleChange}
            value={this.state.leukenaam}
          />
        </form>
        <button type="submit" form="namen" value="Create User" className="submitBtn">Klaar</button>
      </section>
    );
  }
}