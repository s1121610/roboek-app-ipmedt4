import React from 'react';

import './WelkomButtonList.css'

class WelkomButtonList extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      voornaam: "",
      leukenaam: ""
    };
    this.voornaamHandleChange = this.voornaamHandleChange.bind(this);
    this.leukenaamHandleChange = this.leukenaamHandleChange.bind(this);
  }

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
        <form method="post" id="namen" className="naamInput__form">
          <input type="text" id="voornaam" placeholder="Voer hier je naam in" className="naamInput__form__input" 
            onChange={this.voornaamHandleChange} 
            value={this.state.voornaam}
          />
          <input type="text" id="leukenaam" placeholder="Vul een leuke naam in" className="naamInput__form__input" 
            onChange={this.leukenaamHandleChange}
            value={this.state.leukenaam}
          />
        </form>
        <button type="submit" form="namen" value="Submit" className="submitBtn">Klaar</button>
      </section>
    );
  }
}


  


export default WelkomButtonList;
