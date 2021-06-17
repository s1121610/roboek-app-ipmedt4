import React from 'react';
import './WelkomTekst.css';

const WelkomTekst = () => {
    return (
      <section className="welkomtekst">
        <section className="welkomtekst__tekstbox sb1">
          <p>Hallo! Ik ben Roboek en ik ga je alles vertellen over deze app!</p>
          <p>Hoe heet jij?</p>
        </section>
        <img className="welkomtekst__menu_img" src="/img/MenuLogo.png" alt="Roboek robot"/>
      </section>
    );
}

export default WelkomTekst;
