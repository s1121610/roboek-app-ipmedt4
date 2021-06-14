import React from 'react';

import './WelkomButtonList.css'

const WelkomButtonList = () => {
  return (
    <section className="naamInput">
      <form method="post" id="namen" className="naamInput__form">
        <input type="text" id="voornaam" placeholder="Voer hier je naam in" className="naamInput__form__input"/>
        <input type="text" id="leukenaam" placeholder="Vul een leuke naam in" className="naamInput__form__input"/>
      </form>
      <button type="submit" form="namen" value="Submit" className="submitBtn">Klaar</button>
    </section>
  );
}

export default WelkomButtonList;
