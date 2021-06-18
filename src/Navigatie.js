import React from 'react';
import Test from './Test'

import './Navigatie.css';

import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";

const Navigatie = () => {
    return (
        <article className="navigatie">
            <section className="navigatie__knopSectie">
                <img id="js--openModal" className="navigatie__knopSectie__btn" src="/img/MenuLogo.png" alt="Roboek robot die de navigatie opent" onClick={openModal} />
            </section>
            <section id="js--myModal" className="navigatie__modal">
                <section className="navigatie__modal__content">
                    <figure className="close">&times;</figure>
                    <section className="navigatie__modal__content__link">
                        <section className="hulp__section">
                            <p>Hulp</p>
                            <section className="eclipse">
                                <img className="navigatie__modal__content__link__img" src="/img/Help.svg" />
                            </section>
                        </section>
                    </section>
                    <section className="navigatie__modal__content__link">
                        <Link to="/Winkel">
                            <p>Winkel</p>
                            <section className="eclipse">
                                <img className="navigatie__modal__content__link__img" src="/img/Winkel.svg" />
                            </section>
                        </Link>
                    </section>
                    <section className="navigatie__modal__content__link">
                        <Link to="/Bibliotheek">
                            <p>Bibliotheek</p>
                            <section className="eclipse">
                                <img className="navigatie__modal__content__link__img" src="/img/Bibliotheek.svg" />
                            </section>
                        </Link>
                    </section>
                    <section className="navigatie__modal__content__link">
                        <Link to="/Boekenlijst">
                            <p>Boekenlijst</p>
                            <section className="eclipse">
                                <img className="navigatie__modal__content__link__img" src="/img/Boekenlijst.svg" />
                            </section>
                        </Link>
                    </section>
                    <section className="navigatie__modal__content__link">
                        <Link to="/Test">
                            <p>Mijn Boekenkast</p>
                            <section className="eclipse">
                                <img className="navigatie__modal__content__link__img" src="/img/Boekenkast.svg" />
                            </section>
                        </Link>
                    </section>                    
                </section>
            </section>
        </article>
    );
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

export default Navigatie;