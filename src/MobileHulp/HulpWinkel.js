import React from 'react';

import HulpItem from './HulpItem';

import './HulpBoekenlijst.css';

class HulpWinkel extends React.Component {
    render() {
        return (
            <section className="section__hulpWinkel">
                <section className="section__hulpWinkel__onderdeel">
                    <h2 className="hulpSectionTitel">Geld</h2>
                    <HulpItem
                        imgSrc="/roboek-app-ipmedt4/img/Money.svg"
                        p="Dit geeft de hoeveelheid geld die je hebt aan. Het getal verschilt bij iedereen"
                        className="section__contentHulp"
                    />
                    <HulpItem
                        imgSrc="/roboek-app-ipmedt4/img/WinkelTabs.svg"
                        p="Bij elke kleur kan je weer anere dingen kopen"
                        className="flex--column section__contentHulp"
                        id="width--mid"
                    />
                </section>
            </section>
        );
    }
}

export default HulpWinkel;