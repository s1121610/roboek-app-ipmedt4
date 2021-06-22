import React from 'react';
import MobileNavItem from './MobileNavItem'
import HulpBoekenLijst from '../Hulp/HulpBoekenlijst';
import HulpBibliotheek from '../Hulp/HulpBibliotheek';
import HulpBoekenkast from '../Hulp/HulpBoekenkast';
import HulpWinkel from '../Hulp/HulpWinkel';

import './MobileNavigatie.css';

class MobileNavigatie extends React.Component {

    state = {
        visibleKeuzes: false,
    };

    render () {
        let hulpBoekenLijst;
        let hulpBibliotheek;
        let hulpBoekenkast;
        let hulpWinkel;
        if (this.state.visibleKeuzes !== false) {
            hulpBoekenLijst = <HulpBoekenLijst />;
            hulpBibliotheek = <HulpBibliotheek />;
            hulpBoekenkast = <HulpBoekenkast />;
            hulpWinkel = <HulpWinkel />
        }

        return (
            <article className="navigatie">
                <section className="navigatie__knopSectie">
                    <img id="js--openModal" className="navigatie__knopSectie__btn" src="/img/MenuLogo.png" alt="Roboek robot die de navigatie opent" onClick={openModal} />
                </section>
                <section id="js--myModal" className="navigatie__modal" onClick={() => { this.setState({ visibleKeuzes: !this.state.visibleKeuzes }) }}>
                    <section className="navigatie__modal__content">
                        <figure className="close">&times;</figure>
                        <section className="navigatie__modal__content__link margintop--groot">
                            <section className="hulp__section" onClick={() => {this.setState({visibleKeuzes: !this.state.visibleKeuzes})}}>
                                <p>Hulp</p>
                                <section className="eclipse">
                                    <img className="navigatie__modal__content__link__img" src="/img/Help.svg" alt="img van een nav item" />
                                </section>
                            </section>
                            {this.state.visibleKeuzes ?
                                <section className="hulp__section__keuze"> 
                                    <section className="hulp__section__keuze__boekenlijst">
                                        <h2 className="hulp__section__keuze__boekenlijst__h2">Mijn Boekenlijst</h2>
                                        {hulpBoekenLijst} 
                                    </section>
                                    <section className="hulp__section__keuze__bibliotheek">
                                        <h2 className="hulp__section__keuze__bibliotheek__h2">Bibliotheek</h2>
                                        {hulpBibliotheek}
                                    </section>
                                    <section className="hulp__section__keuze__boekenkast">
                                        <h2 className="hulp__section__keuze__boekenkast__h2">Boekenkast</h2>
                                        {hulpBoekenkast}
                                    </section>
                                    <section className="hulp__section__keuze__winkel">
                                        <h2 className="hulp__section__keuze__winkel__h2">Winkel</h2>
                                        {hulpWinkel}
                                    </section>
                                    {/*Hieronder komen de anderen keuzes*/}
                                </section>
                                : null
                            }
                        </section>
                        <MobileNavItem
                            link="/winkel"
                            p="Winkel"
                            imgSrc="/img/Winkel.svg"
                        />
                        <MobileNavItem
                            link="/genre"
                            p="Bibliotheek"
                            imgSrc="/img/Bibliotheek.svg"
                        />
                        <MobileNavItem
                            link="/boekenlijst"
                            p="Mijn Boekenlijst"
                            imgSrc="/img/Boekenlijst.svg"
                        />
                        <MobileNavItem
                            link="/boekenkast"
                            p="Mijn Boekenkast"
                            imgSrc="/img/Boekenkast.svg"
                        />
                    </section>
                </section>
            </article>
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

export default MobileNavigatie;