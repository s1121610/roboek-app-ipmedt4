import React from 'react';
import '../App.css';
import './Genre.css';
import './BibliotheekDesktop.css';
import { Link } from "react-router-dom";

import Avontuur from "./components/DesktopAvontuur";
import DierenEnNatuur from "./components/DesktopDierenEnNatuur";
import Fantasie from "./components/DesktopFantasie";
import Griezelig from "./components/DesktopGriezelig";
import Humor from "./components/DesktopHumor";
import Spanning from "./components/DesktopSpanning";
import Sprookjes from "./components/DesktopSprookjes";
import VriendschapEnVerliefd from "./components/DesktopVriendschapEnVerliefd";

class BibliotheekDesktop extends React.Component{
    
    render(){
        return(
            <article>
                <Avontuur />
                <DierenEnNatuur />
                <Fantasie />
                <Griezelig />
                <Humor />
                <Spanning />
                <Sprookjes />
                <VriendschapEnVerliefd />
            </article>
        );
    }
}

export default BibliotheekDesktop;