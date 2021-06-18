import React from "react";

import "./Winkel.css";
import { createPortal } from "react-dom";

class Items extends React.Component {
    
    onItemClick = (event) => {
        let itemId = event.target.getAttribute("item-id");
        let item = this.props.allItems.find(obj => obj.id == itemId);
        this.props.onItemClick(item);
    }

    render() {
        let soort = this.props.soort;
        let items = this.props.items;
        let shopitems;
        let style;


        switch(soort){
            case("kastkleur"):
                shopitems = <ul className = "winkelSection__itemList">{items.kastkleuren.map(kastkleur =><li key={kastkleur.id} className = "winkelSection__item"><figure className = "item__figure"><input item-id={kastkleur.id} onClick={this.onItemClick} type="image" className = "item__img" src={kastkleur.image} /></figure><p className = "item__text">{kastkleur.prijs}</p></li>)}<li><figure className = "item__figure"></figure></li></ul>
                style = {backgroundColor: "#A1EDA5"};
                break;
            case("robotkleur"):
                shopitems = <ul className = "winkelSection__itemList">{items.robotkleuren.map(robotkleur =><li key={robotkleur.id} className = "winkelSection__item"><figure className = "item__figure"><input item-id={robotkleur.id} onClick={this.onItemClick} type="image" className = "item__img" src={robotkleur.image} /></figure><p className = "item__text">{robotkleur.prijs}</p></li>)}</ul>
                style = {backgroundColor: "#369093"};
                break;
            case("kastdecoratie"):
                shopitems = <ul className = "winkelSection__itemList">{items.kastdecoraties.map(kastdecoratie =><li key={kastdecoratie.id} className = "winkelSection__item"><figure className = "item__figure"><input item-id={kastdecoratie.id} onClick={this.onItemClick} type="image" className = "item__img" src={kastdecoratie.image} /></figure><p className = "item__text">{kastdecoratie.prijs}</p></li>)}</ul>
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