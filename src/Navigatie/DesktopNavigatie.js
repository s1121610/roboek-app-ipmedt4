import React from 'react';

import DesktopNavItem from './DesktopNavItem';
import '../App.css';

import './DesktopNavigatie.css'

class DesktopNav extends React.Component {
    render() {
        return (
            <section className="desktopNav" id="css--desktopNav">
                <figure className="desktopNav__figure">
                  <img className="desktopNav__image" src="/img/MenuLogo.png" alt="Roboek robot die de navigatie opent"/>
                </figure>
                <DesktopNavItem link="/boekenlijst" p="Boekenlijst"/>
                <DesktopNavItem link="/genre" p="Bibliotheek" />
                <DesktopNavItem link="/boekenkast" p="Boekenkast" />
                <DesktopNavItem link="/winkel" p="Winkel" />
                <section className="desktopNav__hulp">
                    <p className="desktopNav__hulp__p">Hulp</p>
                </section>
            </section>
        );
    }
}

export default DesktopNav;
