import React from 'react';
import NavItem from './NavItem'

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
                    <section className="navigatie__modal__content__link margintop--groot">
                        <section className="hulp__section">
                            <p>Hulp</p>
                            <section className="eclipse">
                                <img className="navigatie__modal__content__link__img" src="/img/Help.svg" />
                            </section>
                        </section>
                    </section>
                    <NavItem
                        link="/Winkel"
                        p="Winkel"
                        imgSrc="/img/Winkel.svg"
                    />
                    <NavItem
                        link="/Bibliotheek"
                        p="Bibliotheek"
                        imgSrc="/img/Bibliotheek.svg"
                    />
                    <NavItem
                        link="/Boekenlijst"
                        p="Mijn Boekenlijst"
                        imgSrc="/img/Boekenlijst.svg"
                    />
                    <NavItem 
                        link="/Test"
                        p="Mijn Boekenkast"
                        imgSrc="/img/Boekenkast.svg"
                    />                   
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