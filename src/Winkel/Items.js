import React from "react";
import axios from "axios";

import "./Winkel.css";
import { createPortal } from "react-dom";

class Items extends React.Component {

    state = {
        kastkleuren: [],
        robotkleuren: [],
        kastdecoraties: [],
        soort: "kastkleur"
    }

    onButtonClicked = (event) => {
        this.setState({soort: event.target.id});
        this.componentDidMount();
    }

    componentDidMount() {
        const BASE_URL = "http://localhost:8000/api/items/";
        axios.get(BASE_URL).then(res => {
            this.setState({kastkleuren: res.data.kastkleuren,
                            robotkleuren: res.data.robotkleuren,
                            kastdecoraties: res.data.kastdecoraties});
            console.log(this.state);
        })
    };

    render() {
        let shopitems;
        let style = {backgroundColor: "#369093"};

        


        switch(this.state.soort){
            case("kastkleur"):
                shopitems = <ul className = "winkelSection__itemList">{this.state.kastkleuren.map(kastkleur =><li className = "winkelSection__item"><figure className = "item__figure"><img class = "item__img" src={kastkleur.image} /></figure><p className = "item__text">{kastkleur.prijs}</p></li>)}<li><figure className = "item__figure"></figure></li></ul>
                style = {backgroundColor: "#A1EDA5"};
                break;
            case("robotkleur"):
                shopitems = <ul className = "winkelSection__itemList">{this.state.robotkleuren.map(robotkleur =><li className = "winkelSection__item"><figure className = "item__figure"><img class = "item__img" src={robotkleur.image} /></figure><p className = "item__text">{robotkleur.prijs}</p></li>)}</ul>
                style = {backgroundColor: "#369093"};
                break;
            case("kastdecoratie"):
                shopitems = <ul className = "winkelSection__itemList">{this.state.kastdecoraties.map(kastdecoratie =><li className = "winkelSection__item"><figure className = "item__figure"><img class = "item__img" src={kastdecoratie.image} /></figure><p className = "item__text">{kastdecoratie.prijs}</p></li>)}</ul>
                style = {backgroundColor: "#E35E16"};
                break;
        }

        return (
            <article className = "winkelSection">
                <section className = "winkelSection__buttonSection">
                    <button className = "winkelSection__buttonSection__button buttonColor__green" ><input id="kastkleur" onClick = {this.onButtonClicked} type="image" class="winkelSection__buttonSection__buttonImg" src = "img/default_item_color.png"/></button>
                    <button className = "winkelSection__buttonSection__button buttonColor__blue" ><input id="robotkleur" onClick = {this.onButtonClicked} type="image" class="winkelSection__buttonSection__buttonImg" src = "img/robot_icon.png"/></button>
                    <button className = "winkelSection__buttonSection__button buttonColor__orange" ><input id="kastdecoratie" onClick = {this.onButtonClicked} type="image" class="winkelSection__buttonSection__buttonImg" src = "img/default_item_decoratie.png"/></button>
                </section>
                <section className = "winkelSection__itemsSection" style = {style}>     
                    {shopitems}
                </section>
            </article>
        )
    }

}

export default Items;