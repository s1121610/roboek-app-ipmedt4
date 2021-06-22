import React from "react";
import BoekenkastPreview from "./BoekenkastPreview";
import ButtonPreview from "./ButtonPreview";
import RobotPreview from "./RobotPreview";
import KastdecoratiePreview from "./KastdecoratiePreview";

import "./Preview.css";

class Preview extends React.Component {

    render() {
        const soort = this.props.soort;
        const item = this.props.item;
        let primaryColor;
        let secondaryColor;
        let robotColor;
        let itemImg;
        let preview;

        switch(soort){
            case("kastkleur"):
                primaryColor = item.kleur_primary;
                secondaryColor = item.kleur_secondary;
                preview = <section className = "winkelSection__previewSection__preview"><BoekenkastPreview primaryColor = {primaryColor} secondaryColor = {secondaryColor} /></section>;
                break;
            case("robotkleur"):
                robotColor = item.kleur_primary;
                preview = <section className = "winkelSection__previewSection__preview"><RobotPreview primaryColor = {robotColor} /></section>;
                break;
            case("kastdecoratie"):
                itemImg = item.image;
                preview = <section className = "winkelSection__previewSection__preview"><KastdecoratiePreview item = {item} /></section>;
                break;
        }

        return (
            <section className="winkelSection__previewSection">
                    {preview}
                    <ButtonPreview behaaldeItems = {this.props.behaaldeItems} boekenkast = {this.props.boekenkast} item = {this.props.item} koopItem = {this.props.koopItem} updateColor = {this.props.updateColor} user_id= {this.props.user_id} user = {this.props.user} />
            </section>
        )
    }
}

export default Preview;