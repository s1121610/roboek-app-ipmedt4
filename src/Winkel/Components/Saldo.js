import React from "react";

import "./Saldo.css";

const Saldo = (props) => {

    return (
        <section className = "winkelSection__saldoSection">
            <h1 className = "winkelSection__saldoSection__header">{props.saldo || 0}</h1>
            <figure className = "winkelSection__saldoSection__figure">
              <img className= "winkelSection__saldoSection__image" src="img/default_icon_coins.png" />
            </figure>
        </section>
    )
}

export default Saldo;
