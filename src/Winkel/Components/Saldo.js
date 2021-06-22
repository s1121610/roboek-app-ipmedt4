import React from "react";

import "./Saldo.css";

const Saldo = (props) => {

    return (
        <section className = "winkelSection__saldoSection">
            <h1 className = "winkelSection__saldoSection__saldo">{props.saldo}</h1>
        </section>
    )
}

export default Saldo;