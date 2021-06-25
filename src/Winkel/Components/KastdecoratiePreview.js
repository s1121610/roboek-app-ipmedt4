import React from "react";

import "./KastdecoratiePreview.css";

const KastdecoratiePreview = (props) => {

    return (
        <figure className = "winkelSection__previewSection__preview__kastdecoratieFigure">
            <img className = "winkelSection__previewSection__preview__kastdecoratieImage" src = {"/roboek-app-ipmedt4/" + props.item.image}  alt="decoratie voorwerp"/>
        </figure>
    )
    
}

export default KastdecoratiePreview;