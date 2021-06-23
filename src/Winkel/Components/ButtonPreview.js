import React from "react";

import "./ButtonPreview.css";

class ButtonPreview extends React.Component {

    checkIfEquipped = (item) => {
        const boekenkast = this.props.boekenkast;
        const soort = item.soort;
        if(soort === "Kastkleur") {
            if(boekenkast.kast_kleur_primary === item.kleur_primary && boekenkast.kast_kleur_secondary === item.kleur_secondary){
                return {display: "none"};
            }else {
                return {display: "block"};
            }
        }else if(soort === "Robotkleur") {
            if(boekenkast.robot_kleur === item.kleur_primary) {
                return {display: "none"};
            }else {
                return {display: "block"};
            }
        }
    }

    checkIfAffordable = (item) => {
        let userSaldo = this.props.user.saldo;
        if(userSaldo < item.prijs) {
            return {display: "none"};
        }else{
            return {display: "block"};
        }
    }

    onClickKoop = (event) => {
        const item = this.props.item;
        this.props.koopItem(item.id, this.props.user_id, item.prijs);
        event.target.style.display = "none";
    }

    render() {
        const item = this.props.item;
        const behaaldeItems = this.props.behaaldeItems;
        let Button;
        if (Object.keys(item).length == 0 || item.soort === "Kastdecoratie" && behaaldeItems.some(behaaldeItem => behaaldeItem.item_id === item.id)){
            Button = "";
        } else if(behaaldeItems.some(behaaldeItem => behaaldeItem.item_id === item.id)) {
            Button = <button className = "previewSection__btnSection__button button--select" style = {this.checkIfEquipped(item)} onClick = {() => this.props.updateColor(item.id, this.props.user_id)}>{this.props.item.naam + " selecteren"}</button>;
        } else {
            Button = <button className = "previewSection__btnSection__button button--koop" style = {this.checkIfAffordable(item)} onClick = {this.onClickKoop}>{this.props.item.naam + " kopen"}</button>;
        }

        return (
            <section className = "winkelSection__previewSection__btnSection">
                {Button}
            </section>
        )
    }

}

export default ButtonPreview;
