import React from "react";

import "./Items.css";

class Items extends React.Component {

    onItemClick = (event) => {
        let itemId = event.target.getAttribute("item-id");
        let item = this.props.allItems.find(obj => obj.id == itemId);
        this.props.onItemClick(item);
    }

    checkIfEquipped = (item) => {
        const boekenkast = this.props.boekenkast;
        const soort = item.soort;
        let borderStyle;
        if(soort === "Kastkleur") {
            if(boekenkast.kast_kleur_primary === item.kleur_primary && boekenkast.kast_kleur_secondary === item.kleur_secondary){
                borderStyle = {border: ".4rem solid"};
            }else {
                borderStyle = {};
            }
        }else if(soort === "Robotkleur") {
            if(boekenkast.robot_kleur === item.kleur_primary) {
                borderStyle = {border: ".4rem solid"};
            }else {
                borderStyle = {};
            }
        }
        return borderStyle;
    }

    checkIfBehaald(item) {
        let behaaldeItems = this.props.behaaldeItems;
        let behaald;
        if(behaaldeItems.some(behaaldeItem => behaaldeItem.item_id === item.id)) {
            behaald = "";
        } else {
            behaald = item.prijs;
        }
        return behaald;
    }

    render() {
        let soort = this.props.soort;
        let items = this.props.items;
        let shopitems;
        let style;

        switch(soort){
            case("kastkleur"):
                shopitems = <ul className = "winkelSection__itemList">{items.kastkleuren.map(kastkleur =><li key={kastkleur.id} className = "winkelSection__item"><figure style = {this.checkIfEquipped(kastkleur)} className = "item__figure"><input item-id={kastkleur.id} onClick={this.onItemClick} type="image" className = "item__img" src={kastkleur.image} style = {{backgroundColor: kastkleur.kleur_primary}} /></figure><p className = "item__text">{this.checkIfBehaald(kastkleur)}</p></li>)}</ul>
                style = {backgroundColor: "#A1EDA5"};
                break;
            case("robotkleur"):
                shopitems = <ul className = "winkelSection__itemList">{items.robotkleuren.map(robotkleur =><li key={robotkleur.id} className = "winkelSection__item"><figure style = {this.checkIfEquipped(robotkleur)} className = "item__figure"><input item-id={robotkleur.id} onClick={this.onItemClick} type="image" className = "item__img" src={robotkleur.image} style = {{backgroundColor: robotkleur.kleur_primary}} /></figure><p className = "item__text">{this.checkIfBehaald(robotkleur)}</p></li>)}</ul>
                style = {backgroundColor: "#369093"};
                break;
            case("kastdecoratie"):
                shopitems = <ul className = "winkelSection__itemList">{items.kastdecoraties.map(kastdecoratie =><li key={kastdecoratie.id} className = "winkelSection__item"><figure className = "item__figure"><input item-id={kastdecoratie.id} onClick={this.onItemClick} type="image" className = "item__img img--radius" src={kastdecoratie.image} /></figure><p className = "item__text">{this.checkIfBehaald(kastdecoratie)}</p></li>)}</ul>
                style = {backgroundColor: "#E35E16"};
                break;
        }

        return (
            <section className = "winkelSection__itemsSection" style = {style}>
                {shopitems}
            </section>
        );
    }
}

export default Items;
