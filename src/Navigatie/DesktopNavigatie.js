import React from 'react';

import DesktopNavItem from './DesktopNavItem';

import './DesktopNavigatie.css'

class DesktopNav extends React.Component {
    render() {
        return (
            <section className="desktopNav">
                <img className="desktopNav__logo" src="/img/Logo.png" alt="Roboek robot die de navigatie opent"/>
                <DesktopNavItem link="Boekenlijst" p="Boekenlijst"/>
                <DesktopNavItem link="Bibliotheek" p="Bibliotheek" />
                <DesktopNavItem link="Boekenkast" p="Boekenkast" />
                <DesktopNavItem link="Winkel" p="Winkel" />
                <section className="desktopNav__hulp">
                    <p className="desktopNav__hulp__p">Hulp</p>
                </section>
            </section>
        );
    }
}

export default DesktopNav;