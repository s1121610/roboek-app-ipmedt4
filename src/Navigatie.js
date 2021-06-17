import React from 'react';
import Test from './Test'

import './Navigatie.css';

import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";

const Navigatie = () => {
    return (
        <Router>
        <article className="navigatie">
            <section className="navigatie__knopSectie">
                <img id="js--openModal" className="navigatie__knopSectie__btn" src="/img/MenuLogo.png" alt="Roboek robot die de navigatie opent" />
            </section>
            <section id="js--myModal" className="navigatie__modal">
                <section className="navigatie__modal__content">
                    <figure className="close">&times;</figure>
                    <section className="navigatie__modal__content__link">
                        <Link to={"/Test"}>
                            <p>Mijn Boekenkast</p>
                        </Link>
                    </section>                    
                </section>
            </section>
        </article>
        </Router>
    );
}

window.onload = () => {
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