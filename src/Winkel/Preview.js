import React from "react";

import "./Winkel.css";

const Preview = (props) => {
    const item = props.item;

    return (
        <section className="winkelSection__previewSection">
            	<h1>{item.kleur_primary}</h1>
        </section>
    )
}

export default Preview;