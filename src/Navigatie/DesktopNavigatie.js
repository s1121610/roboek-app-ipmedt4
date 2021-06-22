import React from 'react';

import DesktopNavItem from './DesktopNavItem';
import DesktopHulpBoekenLijst from '../DesktopHulp/DesktopHulpBoekenlijst';

import './DesktopNavigatie.css'

class DesktopNav extends React.Component {
    render() {
        return (
            <section className="desktopNav">
                <img className="desktopNav__logo" src="/img/MenuLogo.png" alt="Roboek robot die de navigatie opent"/>
                <DesktopNavItem link="/boekenlijst" p="Boekenlijst"/>
                <DesktopNavItem link="/genre" p="Bibliotheek" />
                <DesktopNavItem link="/boekenkast" p="Boekenkast" />
                <DesktopNavItem link="/winkel" p="Winkel" />
                <section id="js--openModal" className="desktopNav__hulp" onClick={openModal}>
                    <p className="desktopNav__hulp__p">Hulp</p>
                </section>
                <section id="js--myModal" className="desktopNav__modal">
                    <section className="desktopNav__modal__content">
                        <figure className="close">&times;</figure>
                        <section className="desktopNav__modal__content__onderdelen">
                            <section className="desktopNav__modal__content__onderdelen__onderdeel">
                                {/* Hier komt per onderdeel alle hulpmiddelen */}
                                <DesktopHulpBoekenLijst />
                            </section>
                            {/* Hieronder komen de andere secties */}
                        </section>
                    </section>
                </section>
            </section>
        );
    }
}

const openModal = () => {
    var modal = document.getElementById("js--myModal");
    var btnModal = document.getElementById("js--openModal");
    var figure = document.getElementsByClassName("close")[0];

    btnModal && (btnModal.onclick = function () {
        modal.style.display = "block";
    });
    figure && (figure.onclick = function () {
        modal.style.display = "none";
    });
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}

export default DesktopNav;