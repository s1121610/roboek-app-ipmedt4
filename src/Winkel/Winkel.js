import React from "react";
import Buttons from "./Buttons";
import Items from "./Items";
import Preview from "./Preview";

import "./Winkel.css";
import axios from "axios";

class Winkel extends React.Component {

    state = { 
        allItems: [],
        kastkleuren: [],
        robotkleuren: [],
        kastdecoraties: [],
        soort: "kastkleur",
        item: {}
    }

    componentDidMount() {
        const BASE_URL = "http://localhost:8000/api/items/";
        axios.get(BASE_URL).then(res => {
            this.setState({allItems: res.data.items,
                            kastkleuren: res.data.kastkleuren,
                            robotkleuren: res.data.robotkleuren,
                            kastdecoraties: res.data.kastdecoraties});
            console.log(this.state);
        })
    };

    onButtonClicked = (soort) => {
        this.setState({soort: soort});
    }

    onItemClick = (item) => {
        this.setState({item: item});
    }

    render () {
        
        return (
            <article className = "winkelSection">
                <Buttons onButtonClicked = {this.onButtonClicked}/>
                <Items soort = {this.state.soort} items = {this.state} allItems = {this.state.allItems} onItemClick = {this.onItemClick} />
            </article>
        )
    }
}

export default Winkel;