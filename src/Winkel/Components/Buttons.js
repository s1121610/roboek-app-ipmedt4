import React from "react";

import "./Buttons.css";

class Buttons extends React.Component {

    onButtonClicked = (event) => {
        this.props.onButtonClicked(event.target.id);
    }

    render() {
        return (
            <section className = "winkelSection__buttonSection">
                <button className = "winkelSection__buttonSection__button buttonColor__green" ><input id="kastkleur" onClick = {this.onButtonClicked} type="image" className="winkelSection__buttonSection__buttonImg" src = "img/default_item_color_icon.png"/></button>
                <button className = "winkelSection__buttonSection__button buttonColor__blue" ><input id="robotkleur" onClick = {this.onButtonClicked} type="image" className="winkelSection__buttonSection__buttonImg" src = "img/MenuLogo.png"/></button>
                <button className = "winkelSection__buttonSection__button buttonColor__orange" ><input id="kastdecoratie" onClick = {this.onButtonClicked} type="image" className="winkelSection__buttonSection__buttonImg" src = "img/default_item_decoratie.png"/></button>
            </section>
        )
    }
}

export default Buttons;
